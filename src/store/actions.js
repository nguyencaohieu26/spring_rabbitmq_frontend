import {httpOrderService,httpInventoryService} from "@/config";

//handler action for cart
export const getCart = ({commit})=>{
    httpOrderService.get(`cart/getCart`)
        .then(response =>{
            console.log(response);
            commit('SET_CART',response.data.datas[0])
        });
}

export const addProductToCart = ({commit},{product})=>{
    httpOrderService.post(`cart/add`,product).then(response=>{
        commit('ADD_TO_CART',response)
    });
}

export const removeProduct = ({commit},productID)=>{
    httpOrderService.put(`cart/removeCartItem/${productID}`).then(r =>{
        console.log(r);
        commit('REMOVE_PRODUCT',productID);
    })
}

export const clearCart = ({commit})=>{
    httpOrderService.delete(`cart/delete`).then(r => {
        console.log(r);
        commit('CLEAR_CART');
    });
}

export const updateCart = ({commit},product)=>{
    httpOrderService.put(`cart/update`,product)
        .then(response =>{
            commit('UPDATE_CART',response)
        });
}
//handler action for products
export const getProducts =({commit},params)=>{
    httpInventoryService.get(`products/list`, {params: params})
        .then(response =>{
            commit('GET_PRODUCTS',response.data)
        })
}
//handler action for category
export const getCategories = ({commit})=>{
    httpInventoryService.get(`/categories/list`).then(response =>{
        commit('GET_CATEGORIES',response.data.datas)
    })
}