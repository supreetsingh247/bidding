'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveBids = saveBids;

var _actionTypes = require('./actionTypes');

var types = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function saveBids(product) {
  return { type: types.SAVE_BIDS, product: product };
} /**
   * Created by z001lfc on 12/25/16.
   */

//# sourceMappingURL=productActions-compiled.js.map