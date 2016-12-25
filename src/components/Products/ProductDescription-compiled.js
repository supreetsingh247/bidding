'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
    var product = _ref.product;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            { className: 'card', key: product.name, style: { width: 18 + 'rem' } },
            _react2.default.createElement('img', { 'class': 'card-img-top', src: product.imageSource, alt: 'Card image cap', style: { maxWidth: 215 + 'px' } }),
            _react2.default.createElement(
                'div',
                { 'class': 'card-block' },
                _react2.default.createElement(
                    'h4',
                    { 'class': 'card-title' },
                    product.name
                ),
                _react2.default.createElement(
                    'h5',
                    null,
                    'Minimum Price - ',
                    product.minimumPrice
                ),
                _react2.default.createElement(
                    'h5',
                    null,
                    'Current Price - ',
                    product.currentPrice
                )
            )
        )
    );
};

Description.propTypes = {
    product: _react.PropTypes.array.isRequired
};

exports.default = Description;
/**
 * Created by z001lfc on 12/25/16.
 */

//# sourceMappingURL=ProductDescription-compiled.js.map