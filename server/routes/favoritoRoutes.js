import express from 'express'
import {createFavorito, getFavoritosByUser} from '../controllers/favoritoController.js'

const router = express.Router()

router.post('/favorito', createFavorito)
router.get('/favoritos/:id', getFavoritosByUser)

export default router