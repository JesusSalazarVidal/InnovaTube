import mysql from 'mysql2'
import dotenv from 'dotenv';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ejercicio'
})

connection.connect((err)=>{
    if(err){
        console.error('Error al conectarse a la base de datos', err.stack)
        return;
    }
    console.log('Conectado a la base de datos')
})

export default connection;