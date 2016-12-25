'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Products = require('./components/Products/Products');

var _Products2 = _interopRequireDefault(_Products);

var _ProductDetails = require('./components/Products/ProductDetails');

var _ProductDetails2 = _interopRequireDefault(_ProductDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Products2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/productDetails/:productName', component: _ProductDetails2.default })
); /**
    * Created by z001lfc on 12/24/16.
    */

//# sourceMappingURL=routes-compiled.js.map