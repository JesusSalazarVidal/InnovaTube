// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if (!authHeader) {
    return res.status(401).send('Acceso denegado. No se proporcionó token.');
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).send('Acceso denegado. Formato de token inválido.');
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Token inválido.');
  }
};

export default authMiddleware;
