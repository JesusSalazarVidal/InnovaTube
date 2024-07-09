import express from 'express'
import {createFavorito, getFavoritosByUser} from '../controllers/favoritoController.js'

const router = express.Router()

router.post('/favorito', createFavorito)
router.get('/favoritos/:idUsuario', getFavoritosByUser)

export default router