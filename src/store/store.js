import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        stocks: [{
            name: "BMW",
            price: 110,
            quantity: 0
        }, {
            name: "Google",
            price: 200,
            quantity: 0
        }, {
            name: "Apple",
            price: 250,
            quantity: 0
        }, {
            name: "Twitter",
            price: 8,
            quantity: 0
        }],
        funds: 10000
    },
    getters,
    mutations,
    actions
});