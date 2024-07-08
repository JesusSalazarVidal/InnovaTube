import connection from "../db.js";

const User = {
  create: (userData, callback) => {
    const sql =
      "INSERT INTO usuarios (nombreApellido, usuario, correo, password) VALUES (?, ?, ?, ?)";
    connection.query(
      sql,
      [
        userData.nombreApellido,
        userData.usuario,
        userData.correo,
        userData.password,
      ],
      callback
    );
  },

  getUsers: (callback) => {
    const sql = "SELECT * FROM usuarios";
    connection.query(sql, callback);
  },

  findByUsuarioOrCorreo: (identificador, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE usuario = ? OR correo = ?';
    connection.query(sql, [identificador, identificador], callback);
  }
};

export default User;
