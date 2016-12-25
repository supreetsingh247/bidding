/**
 * Created by z001lfc on 12/24/16.
 */
import {combineReducers} from 'redux';
import products from './productReducer';

const rootReducer = combineReducers({
    products
});

export default rootReducer;