import connection from '../../db.js'

const Favorito = {
    create: (favoritoData, callback) => {
      const sql =
        "INSERT INTO favoritos (idUsuario, videoId, title, thumbnail) VALUES (?, ?, ?, ?)";
      connection.query(
        sql,
        [
          favoritoData.idUsuario,
          favoritoData.videoId,
          favoritoData.title,
          favoritoData.thumbnail,
        ],
        callback
      );
    },

    getFavoritosByUser:(idUsuario, callback) =>{
        const sql = 'SELECT * FROM favoritos WHERE idUsuario = ?'
        connection.query(sql,[idUsuario], callback)
    }
  
    
  };

  export default Favorito