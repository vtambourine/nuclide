Object.defineProperty(exports, '__esModule', {
  value: true
});

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 */

var _reactForAtom = require('react-for-atom');

var ToolbarCenter = function ToolbarCenter(props) {
  return _reactForAtom.React.createElement(
    'div',
    { className: 'nuclide-ui-toolbar__center' },
    props.children
  );
};
exports.ToolbarCenter = ToolbarCenter;