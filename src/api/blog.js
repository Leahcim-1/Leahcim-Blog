import request from './index';
import axios from 'axios';

// Init blog
export const initBlog = (  ) => {
    return request({
        url: '/api/init_blog',
        method: "GET",
    })
}

//Upload Cover
export const uploadCover = (  img, id) => {
    return axios.post('/api/upload_cover', img, {
        params: id,
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}

//Add Blog 
export const addBlog = (  blog ) => {
    return request({
        url: '/api/add_blog',
        method: "POST",
        data: blog,
    });
}

export const getBlog = ( condition ) => {
    return request({
        url: '/api/get_blog',
        method: "GET",
        params: condition 
    });
}


export const editBlog = ( id, docs ) => {
    return request({
        url: '/api/edit_blog',
        method: "PUT",
        data: {
            id: id,
            docs: docs
        }
    });
}

export const deleteBlog = (id) => {
    return request({
        url: '/api/delete_blog',
        method: "DELETE",
        data: {
            id: id
        },
    });
}