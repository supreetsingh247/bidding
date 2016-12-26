/**
 * Created by z001lfc on 12/25/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.products, action) {
    switch(action.type) {
        case types.SAVE_BIDS:
            let newState = Object.assign([], state);
            let currentPrice = action.product.currentPrice;
            for(var i = 0; i < newState.length; i++){
                if(newState[i].name == action.product.name){
                    if(parseInt(currentPrice) > parseInt(newState[i].currentPrice)){
                        newState[i] = Object.assign({}, newState[i], {"currentPrice" : currentPrice});
                    }
                }
            }
            return newState;
        default:
            return state;
    }
}