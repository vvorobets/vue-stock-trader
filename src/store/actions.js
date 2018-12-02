import * as types from './types';

export default {
    [types.LOAD_DATA]: ({commit}, payload) => {
        commit(types.MUTATE_LOAD_DATA, payload)
    },
    [types.BUY_STOCKS]: ({commit}, payload) => {
        commit(types.MUTATE_BUY_STOCKS, payload)
    },
    [types.SELL_STOCKS]: ({commit}, payload) => {
        commit(types.MUTATE_SELL_STOCKS, payload)
    },
    [types.END_DAY]: ({commit}) => {
        commit(types.MUTATE_END_DAY)
    }
};