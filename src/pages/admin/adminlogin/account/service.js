import http from "@/config";

const getAccounts   = (params) => http.get(`accounts`,{params:params});
const createAccount = (data) => http.post(`accounts/add`,data);

export {getAccounts,createAccount}