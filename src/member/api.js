import apiUrl from '../apiConfig';
import axios from 'axios';


// export const membeIndex = () => {
//   return axios({
//     method: 'GET',
//     url: apiUrl + '/users',

//   })
// }
export const index = user => {
    return axios({
        method: 'GET',
        url: apiUrl + '/users',
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
}
export const show = (user,memberId) => {
    return axios({
        method: 'GET',
        url: apiUrl + `/users/${memberId}`,
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    })
}