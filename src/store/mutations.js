import * as types from './types';

export default {
    [types.MUTATE_LOAD_DATA]: (state, payload) => {
        state.stocks = payload.stocks;
        state.funds = payload.funds;
    },
    [types.MUTATE_BUY_STOCKS]: (state, payload) => {
        for (let company of state.stocks) {
            if (company.name === payload.name) {
                if (state.funds < payload.quantity * company.price) {
                    console.error("Not enough money");
                    return state;
                }
                company.quantity += payload.quantity;
                state.funds -= company.price * payload.quantity;
            }
        }
    },
    [types.MUTATE_SELL_STOCKS]: (state, payload) => {
        for (let company of state.stocks) {
            if (company.name === payload.name) {
                if (company.quantity < payload.quantity) {
                    console.error("Not enough stocks");
                    return state;
                }
                company.quantity -= payload.quantity;
                state.funds += company.price * payload.quantity;
            }
        }
    },
    [types.MUTATE_END_DAY]: (state) => {
        for (let company of state.stocks) {
            company.price += Math.round(company.price * 0.2 * (Math.random() - 0.5));
            if (company.price < 5) {
                company.price = 5;
            }
        }
    }
};