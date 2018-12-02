<template>
    <div class="portfolio">
        <div v-for="(company, index) in getPortfolio" :key="index" class="portfolio__item-box">
            <h3 class="portfolio__item-header portfolio__item-header--blue">{{ company.name }}
                <span class="portfolio__price-description">(Q-ty: {{ company.quantity }}, Price: {{ company.price }})</span>
            </h3>
            <form class="portfolio__input-box">
                <input :id="company.name" type="number" name="lastname" value="" class="portfolio__input">
                <input type="submit" value="Sell" @click="e => handleSubmit(e, company.name)" class="btn btn--blue">
            </form>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapActions} from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
                getPortfolio: types.GET_PORTFOLIO
            })
        },
        methods: {
            ...mapActions({
                makeDeal: types.SELL_STOCKS,
            }),
            handleSubmit(e, name) {
                e.preventDefault();
                const id = document.getElementById(name);
                let input = Number.parseInt(id.value);
                id.value = 0;
                if (isNaN(input) || input <= 0) {
                    console.error("Incorrect input");
                    return;
                }
                this.makeDeal({name: name, quantity: input});
            }
        }

    }
</script>