import express from 'express'
import {createUser, getUsers, login} from '../controllers/userController.js'
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/crearUsuario', createUser)
router.get('/usuarios', getUsers)
router.post('/login', login)

export default router