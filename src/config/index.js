import axios from "axios";

const configAxios = {
    baseURL:'http://localhost:9191/api/v1',
    timeout:2 * 60 * 1000
}

    const http = axios.create(configAxios);

// const handlerError = (error) =>{
//     if(error.response.status === 400){
//         localStorage.removeItem('access_token');
//         router.push({name:'Login'});
//     }
//     return Promise.reject(error.response);
// }
// http.interceptors.request.use((config)=>{
//     let token = localStorage.getItem('access_token');
//     if(token){
//         config.headers ={
//             ...config.headers,
//             'Authorization':`Bearer ${token}`
//         };
//     }
//     return config;
// },handlerError);
//
// http.interceptors.response.use((res)=>{
//     return Promise.resolve(res);
// },handlerError);

export default http;