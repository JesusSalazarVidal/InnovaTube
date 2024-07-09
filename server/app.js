import express from 'express'
import cors from 'cors'
import userRoutes from './src/routes/userRoutes.js'
import favoritoRoutes from './src/routes/favoritoRoutes.js'
import connection from './db.js'
import mysql from 'mysql'
import dotenv from 'dotenv'

dotenv.config();



const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejercicio'
})

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }))
app.use(express.json())

//Rutas
app.use('/', userRoutes)
app.use('/', favoritoRoutes)

/*
app.post('/create', (req, res)=>{
    const {nombreApellido, usuario, correo, password} = req.body
    db.query('INSERT INTO usuarios(nombreApellido, usuario, correo, password) VALUES(?,?,?,?)',[nombreApellido, usuario, correo, password],
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send("usuario regitrado")
            }
        }
    )
})
    */


export default app