import app from './app.js'
import connection from './db.js'
import dotenv from 'dotenv'

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
  console.error(`Error al iniciar el servidor: ${err.message}`);
});

