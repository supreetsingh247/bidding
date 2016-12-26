'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = courseReducer;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _initialState = require('./initialState');

var _initialState2 = _interopRequireDefault(_initialState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Created by z001lfc on 12/25/16.
 */
function courseReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState2.default.products;
    var action = arguments[1];

    switch (action.type) {
        case types.SAVE_BIDS:
            var newState = Object.assign([], state);
            var currentPrice = action.product.currentPrice;
            for (var i = 0; i < newState.length; i++) {
                if (newState[i].name == action.product.name) {
                    if (parseInt(currentPrice) > parseInt(newState[i].currentPrice)) {
                        newState[i] = Object.assign({}, newState[i], { "currentPrice": currentPrice });
                    }
                }
            }
            return newState;
        default:
            return state;
    }
}

//# sourceMappingURL=productReducer-compiled.js.map