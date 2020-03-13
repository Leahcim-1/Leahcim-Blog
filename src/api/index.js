import { message } from 'antd';
import { throwErr } from "./error";
let axios = require('axios').default;
var qs = require('qs');



let Axios = axios.create({

    timeout: 10000,
    withCredentials: true,
    proxy: {
        host: 'http://127.0.0.1/',
        port: 20000,
    },
});


Axios.interceptors.request.use(

    config => {

        if (config.method.toUpperCase() === "POST" || config.method === "PUT" || config.method === "DELETE") {
            config.data = qs.stringify(config.data);
        }

        // if (localStorage.token) {
        // /    config.header.Authorization = localStorage.token;
        // // }

         return config;
    },

    error => {
        message.error(error.message);
        return Promise.reject(error.message);
    }

);

Axios.interceptors.response.use(

    res => {
        return res;
    },

    error => {
        message.error(error.message)
        return Promise.reject(error.message);
    }
)

export default function request({ url, method, data ={},  params={}, headers}) {
    return new Promise((resolve, reject) => {
        Axios.request({
            url: url,
            method: method,
            data: data,
            params: params, 
            headers: headers,
        })
            .then(res => {
                if (res.status >= 200 && res.status <= 299) {
                    resolve(res.data);
                }
                else {
                    message.error(res.statusText);
                }
            })
            .catch(error => {
                if (error && error.response) {
                    
                    return reject()
                }
                return reject(error)
            })
        })
    
}


