import * as types from './types';

export default {
    [types.GET_BALANCE]: state => {
        return state.funds;
    },
    [types.GET_PRICES]: state => {
        return state.stocks;
    },
    [types.GET_PORTFOLIO]: state => {
        return state.stocks.filter(company => company.quantity > 0);
    }
};