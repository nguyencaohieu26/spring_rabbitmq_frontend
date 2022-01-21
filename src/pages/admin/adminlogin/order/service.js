import http from "@/config";

const getOrders   = () =>http.get(`orders`);
const createOrder = (data) =>http.post(`orders/add`,data);
const deleteOrder = (id) =>http.delete(`orders/${id}`);

export {getOrders,createOrder,deleteOrder}