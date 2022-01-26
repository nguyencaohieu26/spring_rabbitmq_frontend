import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
import http from "@/config";
const access_token = "abcde";
const initialState = http.get(`/cart/getListItem?access_token=${access_token}`);

export default new Vuex.Store({
    state:{cart: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : initialState,},
    getters:{},
    mutations: {
        /*  The method should contain a logic to change the state
            The method will automatically get the current state as an argument
            The second argument of mutations method is a payload(the data package) can be appended
        */
        // removeItem(state,payload){},
        // addItem(state,payload){},
        // addQuantity(state,payload){},
        // clearOrder(state){}
    },
    actions: {}
})