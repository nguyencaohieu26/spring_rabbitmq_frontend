import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const initialState = {account_id: 1, orderDetails: []};

export default new Vuex.Store({
    state:{order: localStorage.getItem('cart') != null ? JSON.parse(localStorage.getItem('cart')) : initialState,},
    getters:{},
    mutations: {
        /*  The method should contain a logic to change the state
            The method will automatically get the current state as an argument
            The second argument of mutations method is a payload(the data package) can be appended
        */
        removeItem(state,payload){
            const findPro = state.order.orderDetails.filter(pro => pro["orderDetailKey"].productID != payload.id);
            state.order.orderDetails = findPro;
            localStorage.setItem('cart',JSON.stringify({...state.order,orderDetails:findPro}))
        },
        addItem(state,payload){
            state.order.orderDetails.push(payload);
            localStorage.setItem('cart',JSON.stringify(state.order));
        },
        addQuantity(state,payload){
            //get item
            const product = state.order.orderDetails.find(ele => ele.orderDetailKey.productID == payload.id);
            //change quantity
            product.quantity = payload.quantity;
            localStorage.setItem('cart',JSON.stringify(state.order));
        },
        clearOrder(state){
          state.order = {account_id: 1, orderDetails: []};
        }
    },
    actions: {}
})