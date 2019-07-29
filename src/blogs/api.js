import apiUrl from '../apiConfig';
import axios from 'axios';


export const index = user => {
    return axios ({
        method: 'GET', 
        url: apiUrl + '/blogs', 
        headers:{
         'Authorization': `Bearer ${user.token}`
        }
    })
}
export const indexAll =() => {
    return axios({
        method: 'GET',
        url: apiUrl + '/blogs/all',
       
    })
}

export const show = (user, blogId) => {
    return axios({
        method: 'GET',
        url: apiUrl + `/blogs/${blogId}`,
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
}
export const showAll = (blogId) => {
    return axios({
        method: 'GET',
        url: apiUrl + `/blogs/all/${blogId}`,
    })
}
export const create = (user, newBlog) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/blogs',
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data: {
            blog: newBlog
        }
    })

}
export const destroy = (user, blogId) => {
    return axios({
        method: "DELETE",
        url: apiUrl + `/blogs/${blogId}`,
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}
export const update = (user, updateBlog, blogId) => {
    return axios({
        method: 'PUT',
        url: apiUrl + `/blogs/${blogId}`,
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data: {
            blog: updateBlog
        }
    })
}