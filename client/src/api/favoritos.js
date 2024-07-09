import axios from './axios'
export const createFavoritoRequest = (video) => axios.post('/favorito', video)
export const getFavoritosByUserRequest = (idUsuario) => axios.get(`/favoritos/${idUsuario}`)