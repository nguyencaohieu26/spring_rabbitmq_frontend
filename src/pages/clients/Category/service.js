import http from "@/config";

const getCategories = ()=> http.get(`/categories`);
const createCategory = (data) => http.post(`/categories/add`,data);

export {getCategories,createCategory}