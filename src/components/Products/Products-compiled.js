'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('/Users/z001lfc/WebstormProjects/bidding/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/z001lfc/WebstormProjects/bidding/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/z001lfc/WebstormProjects/bidding/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _Description = require('./Description');

var _Description2 = _interopRequireDefault(_Description);

var _productActions = require('../../actions/productActions');

var productActions = _interopRequireWildcard(_productActions);

var _iphone = require('../../resources/images/iphone7.png');

var _iphone2 = _interopRequireDefault(_iphone);

var _s7edge = require('../../resources/images/s7edge.png');

var _s7edge2 = _interopRequireDefault(_s7edge);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    Products: {
        displayName: 'Products'
    }
};

var _UsersZ001lfcWebstormProjectsBiddingNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: '/Users/z001lfc/WebstormProjects/bidding/src/components/Products/Products.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _UsersZ001lfcWebstormProjectsBiddingNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: '/Users/z001lfc/WebstormProjects/bidding/src/components/Products/Products.js',
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _UsersZ001lfcWebstormProjectsBiddingNode_modulesReactTransformHmrLibIndexJs2(_UsersZ001lfcWebstormProjectsBiddingNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var Products = _wrapComponent('Products')(function (_React$Component) {
    _inherits(Products, _React$Component);

    function Products(props, context) {
        _classCallCheck(this, Products);

        var _this = _possibleConstructorReturn(this, (Products.__proto__ || Object.getPrototypeOf(Products)).call(this, props, context));

        _this.state = {};
        var store = _this.context.store;
        return _this;
    }

    _createClass(Products, [{
        key: 'render',
        value: function render() {
            return _react3.default.createElement(_Description2.default, {
                products: this.props.products
            });
        }
    }]);

    return Products;
}(_react3.default.Component));

Products.contextTypes = {
    router: _react2.PropTypes.object,
    store: _react3.default.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        products: state.products
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Products);

//# sourceMappingURL=Products-compiled.js.map