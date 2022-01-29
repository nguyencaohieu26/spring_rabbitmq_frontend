import http from "@/config";
const access_token = 'abcde';

//handler action for cart
export const getCart = ({commit})=>{
    http.get(`cart/getListItem?access_token=${access_token}`)
        .then(response =>{
            commit('SET_CART',response.data.datas[0])
        });
}

export const addProductToCart = ({commit},{product})=>{
    http.post(`cart/add?access_token=${access_token}`,product).then(response=>{
        commit('ADD_TO_CART',response)
    });
}

export const removeProduct = ({commit},productID)=>{
    http.get(`cart/removeCartItem/${productID}?access_token=${access_token}`)
    commit('REMOVE_PRODUCT',productID);
}

export const clearCart = ({commit})=>{
    http.delete(`cart/delete?access_token=${access_token}`);
    commit('CLEAR_CART');
}

export const updateCart = ({commit},product)=>{
    http.post(`cart/update?access_token=${access_token}`,product)
        .then(response =>{
            commit('UPDATE_CART',response)
        });
}
//handler action for products
export const getProducts =({commit},params)=>{
    http.get(`products/list`, {params: params})
        .then(response =>{
            commit('GET_PRODUCTS',response.data)
        })
}
//handler action for category
export const getCategories = ({commit})=>{
    http.get(`/categories`).then(response =>{
        commit('GET_CATEGORIES',response.data.datas)
    })
}