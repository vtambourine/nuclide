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

import type {NuclideUri} from '../../../commons-node/nuclideUri';

import React from 'react';
import {Dropdown} from '../../../nuclide-ui/Dropdown';
import {Button, ButtonSizes, ButtonTypes} from '../../../nuclide-ui/Button';

const FB_HOST_SUFFIX = '.facebook.com';

type Props = {
  setHost: (host: NuclideUri) => void,
  setDeviceType: (deviceType: string) => void,
  hosts: NuclideUri[],
  host: NuclideUri,
  deviceTypes: string[],
  deviceType: ?string,
};

export class Selectors extends React.Component {
  props: Props;

  _getHostOptions(): Array<{value: ?string, label: string}> {
    return this.props.hosts
      .map(host => {
        return host.endsWith(FB_HOST_SUFFIX)
          ? host.substring(0, host.length - FB_HOST_SUFFIX.length)
          : host;
      })
      .map(host => ({value: host, label: host}));
  }

  _getTypesSelector(): React.Element<any>[] {
    return this.props.deviceTypes.map(deviceType => {
      if (deviceType === this.props.deviceType) {
        return (
          <Button
            key={deviceType}
            buttonType={ButtonTypes.PRIMARY}
            size={ButtonSizes.SMALL}>
            {deviceType}
          </Button>
        );
      }
      return (
        <Button
          key={deviceType}
          size={ButtonSizes.SMALL}
          onClick={() => this.props.setDeviceType(deviceType)}>
          {deviceType}
        </Button>
      );
    });
  }

  render(): React.Element<any> {
    return (
      <table>
        <tr>
          <td>
            <Dropdown
              className="inline-block"
              options={this._getHostOptions()}
              onChange={this.props.setHost}
              value={this.props.host}
              key="connection"
            />
          </td>
        </tr>
        <tr>
          <td>
            {this._getTypesSelector()}
          </td>
        </tr>
      </table>
    );
  }
}
