import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const initalState = {account_id: 1, orderDetails: []};
export default new Vuex.Store({
    state:{
        order: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : initalState,
    },
    getters:{},
    mutations: {},
    actions: {}
})