import express from 'express'
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js'
import favoritoRoutes from './src/routes/favoritoRoutes.js'
import connection from './db.js'
import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config();



const app = express()

app.use(cors({
    origin: process.env.FRONT_URL,
    credentials: true,
  }))
app.use(express.json())

//Rutas
app.use('/', userRoutes)
app.use('/', favoritoRoutes)




export default app