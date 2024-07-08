import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.js'
import connection from './db.js'
import mysql from 'mysql2'

const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejercicio'
})

app.use(cors())
app.use(express.json())

//Rutas
app.use('/', userRoutes)

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