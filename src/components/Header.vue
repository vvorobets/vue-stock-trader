<template>
    <div class="header">
        <ul class="header__link-box">
            <router-link to="/" tag="li" active-class="active" exact class="header__link header__link--strong"><a>Stock Trader</a></router-link>
            <router-link to="/portfolio" tag="li" active-class="active" class="header__link"><a>Portfolio</a></router-link>
            <router-link to="/stocks" tag="li" active-class="active" class="header__link"><a>Stocks</a></router-link>
        </ul>
        <div class="header__control-box">
            <div class="header__control" @click="endDay">End Day</div>
            <div class="header__control" @click="uploadData">Save</div>
            <div class="header__control" @click="downloadData">Load</div>
            <div class="header__info">Funds: ${{getBalance}}</div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
                getPortfolio: types.GET_PORTFOLIO,
                getPrices: types.GET_PRICES,
                getBalance: types.GET_BALANCE
            })
        },
        methods: {
            ...mapActions({
                endDay: types.END_DAY,
                loadData: types.LOAD_DATA
            }),
            uploadData() {
                this.$http.put('stocks.json',
                {funds: this.getBalance, stocks: this.getPrices}
                ).then(response => {console.log(response)}, error => {console.log(error)});
            },
            downloadData() {
                this.$http.get('stocks.json')
                .then(response => { return response.json() })
                .then(data => this.loadData(data))
                .catch(error => {console.log(error)});

            }
        }
    }
</script>
