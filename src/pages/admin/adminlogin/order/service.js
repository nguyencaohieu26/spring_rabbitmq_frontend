import http from "@/config";

const getOrders = (params) =>http.get(`orders`,{params:params});
const createOrder = (data) =>http.get(`orders/add`,data);
const detailOrder = (id) =>http.get(`orders/${id}`);

export {getOrders,createOrder,detailOrder}