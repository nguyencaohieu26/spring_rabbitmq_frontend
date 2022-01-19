import http from "@/config";

const getProducts = (params) => {return  http.get(`products/list`, {params: params})};
const createProduct = (data) => http.post(`products/add`,data);
const getProductDetail = (id) => http.get(`products/${id}`);
const deleteProduct     = (id) => http.delete(`products/${id}`);

export { getProducts,createProduct,getProductDetail,deleteProduct }
