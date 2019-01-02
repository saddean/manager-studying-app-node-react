import axios from 'axios';

const URL_API = 'https://react-node-auth.herokuapp.com/api';

const callAPI = (endpoint, method = 'GET', data, token = '') => {
    return axios({
        method: method,
        url: `${URL_API}/${endpoint}`,
        data: data,
        headers: { "x-auth": `${token}` }
    })
}

export default callAPI;