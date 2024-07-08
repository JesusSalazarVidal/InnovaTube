import app from './app.js'
import connection from './db.js'

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
}).on('error', (err) => {
  console.error(`Error al iniciar el servidor: ${err.message}`);
});

