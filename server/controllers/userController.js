import User from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const createUser = async(req, res) => {
  const { nombreApellido, usuario, correo, password } = req.body;

  // Cifrar la contraseña
  const saltRounds = 10; // Puedes ajustar el número de rondas según tus necesidades
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  User.create(
    { nombreApellido, usuario, correo, password: hashedPassword },
    (error, results) => {
      if (error) {
        console.error("Error al insertar usuario:", error.stack);
        res.status(500).send("Error al insertar usuario");
        return;
      }
      res.status(201).send("Usuario creado con éxito");
    }
  );
};

export const getUsers = (req, res) => {
  User.getUsers((error, results) => {
    if (error) {
      console.error('Error al obtener usuarios:', error.stack);
      res.status(500).send('Error al obtener usuarios');
      return;
    }
    res.send(results);
  });
};

export const login = (req, res) => {
  const { identificador, password } = req.body;
  User.findByUsuarioOrCorreo(identificador, (error, results) => {
    if (error) {
      console.error('Error al buscar usuario:', error.stack);
      res.status(500).send('Error al buscar usuario');
      return;
    }
    if (results.length === 0) {
      res.status(401).send('Usuario no encontrado');
      return;
    }
    
    const user = results[0];

    // Comparar la contraseña cifrada
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error al comparar contraseñas:', err.stack);
        res.status(500).send('Error al comparar contraseñas');
        return;
      }
      if (!isMatch) {
        res.status(401).send('Contraseña Incorrecta');
        return;
      }
      // Generar un token JWT
      //const token = jwt.sign({ id: user.id, nombre: user.nombre, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json(results[0]);
    });
  });
};
