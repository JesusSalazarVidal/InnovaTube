import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    withCredentials: true
})

export default instance