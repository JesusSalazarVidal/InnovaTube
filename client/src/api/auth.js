import axios from './axios'
export const loginRequest = (usuario) => axios.post('/login', usuario)
export const registerRequest = (usuario)=> axios.post('/crearUsuario', usuario)