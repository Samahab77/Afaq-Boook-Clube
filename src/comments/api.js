import apiUrl from '../apiConfig';
import axios from 'axios';


export const index = (user, blogId) => {
    return axios ({
        method: 'GET', 
        url: apiUrl + `/blogs/${blogId}/comments`, 
        headers:{
         'Authorization': `Bearer ${user.token}`
        }
    })
}



export const create = (user, newCommint, blogId) => {
    return axios({
        method: 'POST',
        url: apiUrl + `/blogs/${blogId}/comments`,
        headers: {
            "Authorization": `Bearer ${user.token}`
        },
        data: {
            comment: newCommint
        }
    })
}


export const destroy = (user, blogId, commentId) => {
    return axios({
        method: "DELETE",
        url: apiUrl + `/blogs/${blogId}/comments/${commentId}`,
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

// export const update = (user, updateComment, commentId, blogId) => {
//     return axios({
//         method: 'PUT',
//         url: apiUrl + `/blogs/${blogId}/comments/${commentId}`,
//         headers: {
//             "Authorization": `Bearer ${user.token}`
//         },
//         data: {
//             blog: updateBlog
//         }
//     })
// }