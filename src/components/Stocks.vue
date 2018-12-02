<template>
    <div class="portfolio">
        <div v-for="(company, index) in getPrices" :key="index" class="portfolio__item-box">
            <h3 class="portfolio__item-header portfolio__item-header--brown">{{ company.name }}
                <span class="portfolio__price-description">(Price: {{ company.price }})</span>
            </h3>
            <form class="portfolio__input-box">
                <input :id="company.name" type="number" name="lastname" value="" class="portfolio__input">
                <input type="submit" value="Buy" @click="e => handleSubmit(e, company.name)" class="btn btn--brown">
            </form>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapGetters} from 'vuex';
    import * as types from '../store/types';

    export default {
        computed: {
            ...mapGetters({
                getPrices: types.GET_PRICES
            })
        },
        methods: {
            ...mapActions({
                makeDeal: types.BUY_STOCKS,
            }),
            handleSubmit(e, name) {
                e.preventDefault();
                const id = document.getElementById(name);
                let input = Number.parseInt(id.value);
                if (!isNaN(input) && input > 0) {
                    this.makeDeal({name: name, quantity: input});
                }
                id.value = 0;
            }
        }
    }
</script>
