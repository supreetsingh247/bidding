/**
 * Created by z001lfc on 12/25/16.
 */
import * as types from './actionTypes';

export function saveBids(product) {
    return { type: types.SAVE_BIDS, product:product };
}