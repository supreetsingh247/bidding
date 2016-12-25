'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by z001lfc on 12/24/16.
 */
var Header = function Header() {
    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            _reactRouter.IndexLink,
            { to: '/', activeClassName: 'active' },
            'Products'
        ),
        " | ",
        _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', activeClassName: 'active' },
            'test'
        )
    );
};

Header.propTypes = {};

exports.default = Header;

//# sourceMappingURL=Header-compiled.js.map