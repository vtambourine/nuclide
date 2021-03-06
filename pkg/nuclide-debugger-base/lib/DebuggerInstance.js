/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type WS from 'ws';
import type DebuggerProcessInfo from './DebuggerProcessInfo';
import type {NuclideUri} from '../../commons-node/nuclideUri';
import type {CategoryLogger} from '../../nuclide-logging';
import type {AtomNotification} from './types';

import {Emitter} from 'atom';
import UniversalDisposable from '../../commons-node/UniversalDisposable';
import {
  translateMessageFromServer,
  translateMessageToServer,
} from './ChromeMessageRemoting';
import nuclideUri from '../../commons-node/nuclideUri';
import {
  WebSocketServer,
} from '../../nuclide-debugger-common/lib/WebSocketServer';
import {stringifyError} from '../../commons-node/string';

import {getCategoryLogger} from '../../nuclide-logging';
const SESSION_END_EVENT = 'session-end-event';

export default class DebuggerInstanceBase {
  _processInfo: DebuggerProcessInfo;
  +onSessionEnd: ?(callback: () => void) => IDisposable;

  constructor(processInfo: DebuggerProcessInfo) {
    this._processInfo = processInfo;
  }

  getDebuggerProcessInfo(): DebuggerProcessInfo {
    return this._processInfo;
  }

  getProviderName(): string {
    return this._processInfo.getServiceName();
  }

  getTargetUri(): NuclideUri {
    return this._processInfo.getTargetUri();
  }

  dispose(): void {
    throw new Error('abstract method');
  }

  getWebsocketAddress(): Promise<string> {
    throw new Error('abstract method');
  }
}

export class DebuggerInstance extends DebuggerInstanceBase {
  _rpcService: Object;
  _disposables: UniversalDisposable;
  _chromeWebSocketServer: WebSocketServer;
  _chromeWebSocket: ?WS;
  _emitter: Emitter;
  _logger: CategoryLogger;

  constructor(
    processInfo: DebuggerProcessInfo,
    rpcService: Object,
    subscriptions: ?UniversalDisposable,
  ) {
    super(processInfo);
    this._rpcService = rpcService;
    this._disposables = new UniversalDisposable();
    if (subscriptions != null) {
      this._disposables.add(subscriptions);
    }
    this._disposables.add(rpcService);
    this._logger = getCategoryLogger(
      `nuclide-debugger-${this.getProviderName()}`,
    );
    this._chromeWebSocketServer = new WebSocketServer();
    this._chromeWebSocket = null;
    this._emitter = new Emitter();
    this._disposables.add(this._chromeWebSocketServer);
    this._registerServerHandlers();
  }

  getLogger(): CategoryLogger {
    return this._logger;
  }

  _registerServerHandlers(): void {
    const disposables = new UniversalDisposable(
      this._rpcService
        .getServerMessageObservable()
        .refCount()
        .subscribe(
          this._handleServerMessage.bind(this),
          this._handleServerError.bind(this),
          this._handleSessionEnd.bind(this),
        ),
    );
    if (rpcServiceSupportsAtomNotifications(this._rpcService)) {
      disposables.add(
        this._rpcService
          .getAtomNotificationObservable()
          .refCount()
          .subscribe(this._handleAtomNotification.bind(this)),
      );
    }
    this._disposables.add(disposables);
  }

  _handleAtomNotification(notification: AtomNotification): void {
    const {type, message} = notification;
    atom.notifications.add(type, message);
  }

  getWebsocketAddress(): Promise<string> {
    return Promise.resolve(this._startChromeWebSocketServer());
  }

  _startChromeWebSocketServer(): string {
    // setup web socket
    const wsPort = this._getWebSocketPort();
    this._chromeWebSocketServer
      .start(wsPort)
      .catch(this._handleWebSocketServerError.bind(this))
      .then(this._handleWebSocketServerConnection.bind(this));
    const result = 'ws=localhost:' + String(wsPort) + '/';
    this.getLogger().logInfo('Listening for connection at: ' + result);
    return result;
  }

  _handleWebSocketServerError(error: Object): void {
    let errorMessage = `Server error: ${JSON.stringify(error)}`;
    if (error.code === 'EADDRINUSE') {
      errorMessage = `The debug port ${error.port} is in use.
      Please choose a different port in the debugger config settings.`;
    }
    atom.notifications.addError(errorMessage);
    this.getLogger().logError(errorMessage);
    this.dispose();
  }

  _handleWebSocketServerConnection(webSocket: ?WS): void {
    if (webSocket == null) {
      // This means there was an error, which was already handled by _handleWebSocketServerError
      return;
    }
    if (this._chromeWebSocket) {
      this.getLogger().log(
        'Already connected to Chrome WebSocket. Discarding new connection.',
      );
      webSocket.close();
      return;
    }
    this.getLogger().log('Connecting to Chrome WebSocket client.');
    this._chromeWebSocket = webSocket;
    webSocket.on('message', this._handleChromeSocketMessage.bind(this));
    webSocket.on('error', this._handleChromeSocketError.bind(this));
    webSocket.on('close', this._handleChromeSocketClose.bind(this));
  }

  _getWebSocketPort(): number {
    // Generate a random port.
    return this._generateRandomInteger(2000, 65535);
  }

  _generateRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  onSessionEnd(callback: () => mixed): IDisposable {
    return this._emitter.on(SESSION_END_EVENT, callback);
  }

  _translateMessageIfNeeded(message_: string): string {
    let message = message_;
    // TODO: do we really need isRemote() checking?
    if (nuclideUri.isRemote(this.getTargetUri())) {
      message = translateMessageFromServer(
        nuclideUri.getHostname(this.getTargetUri()),
        message,
      );
    }
    return message;
  }

  _handleServerMessage(message_: string): void {
    let message = message_;
    this.getLogger().log('Recieved server message: ' + message);
    const processedMessage = this.preProcessServerMessage(message);
    const webSocket = this._chromeWebSocket;
    if (webSocket) {
      message = this._translateMessageIfNeeded(processedMessage);
      webSocket.send(message);
    } else {
      this.getLogger().logError("Why isn't chrome websocket available?");
    }
  }

  _handleServerError(error: string): void {
    this.getLogger().logError('Received server error: ' + error);
  }

  _handleSessionEnd(): void {
    this.getLogger().log('Ending Session');
    this._emitter.emit(SESSION_END_EVENT);
    this.dispose();
  }

  async _handleChromeSocketMessage(message: string): Promise<void> {
    this.getLogger().log('Recieved Chrome message: ' + message);
    const processedMessage = await this.preProcessClientMessage(message);
    this._rpcService.sendCommand(translateMessageToServer(processedMessage));
  }

  // Preprocessing hook for client messsages before sending to server.
  preProcessClientMessage(message: string): Promise<string> {
    return Promise.resolve(message);
  }

  // Preprocessing hook for server messages before sending to client UI.
  preProcessServerMessage(message: string): string {
    return message;
  }

  _handleChromeSocketError(error: Error): void {
    this.getLogger().logError(
      'Chrome webSocket error ' + stringifyError(error),
    );
    this.dispose();
  }

  _handleChromeSocketClose(code: number): void {
    this.getLogger().log(`Chrome webSocket closed: ${code}`);
    this.dispose();
  }

  dispose() {
    this._disposables.dispose();
  }
}

function rpcServiceSupportsAtomNotifications(service: Object): boolean {
  return typeof service.getAtomNotificationObservable === 'function';
}
