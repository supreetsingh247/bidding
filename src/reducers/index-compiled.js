'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _productReducer = require('./productReducer');

var _productReducer2 = _interopRequireDefault(_productReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by z001lfc on 12/24/16.
 */
var rootReducer = (0, _redux.combineReducers)({
  products: _productReducer2.default
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map