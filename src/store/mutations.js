
//handler mutations for cart
export const SET_CART = (state,cart)=>{
    state.cart = cart;
    if(cart != null){
        state.cartItemCount = cart['listCartItems'].length;
    }
}
export const ADD_TO_CART = (state, response)=>{
    state.cart = response.data.datas[0];
    state.cartItemCount = response.data.datas[0]['listCartItems'].length;
}

export const REMOVE_PRODUCT = (state,productID)=>{
    let newCart = state.cart['listCartItems'].filter(item => item.productID != productID);
    if(newCart.length == 0){
        state.cart = [];
        state.cartItemCount = 0;
    }else{
        let totalPrice = newCart.reduce((total,item)=>{
            let amount = item.quantity * item.unitPrice;
            return  amount+=total},0);
        state.cart = {...state.cart,listCartItems:newCart,totalPrice:totalPrice};
    }
}

export const CLEAR_CART = (state)=>{
    state.cart = [];
    state.cartItemCount = 0;
}

export const UPDATE_CART = (state,response)=>{
    state.cart = response.data.datas[0];
    state.cartItemCount = response.data.datas[0]['listCartItems'].length;
}
//handler mutations for product