import request from './index';
import axios from 'axios'

export const loginReq = ( data ) => {
    return request({
        url: '/login',
        method: "POST",
        data: data,
    });
}

export const userAuth = ( token ) => {
    return axios.get('/auth', {
        headers: {"Authorization" : `Bearer ${token}`} 
    })
}