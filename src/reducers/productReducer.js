/**
 * Created by z001lfc on 12/25/16.
 */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.products, action) {
    switch(action.type) {

        default:
            return state;
    }
}