/**
 * Created by z001lfc on 12/25/16.
 */
import * as types from './actionTypes';

export function test(product) {
    return { type: types.TEST, product:product };
}