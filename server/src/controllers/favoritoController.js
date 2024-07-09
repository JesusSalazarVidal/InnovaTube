import Favorito from "../models/fovoritosModel.js";

export const createFavorito = (req, res) => {
  const { idUsuario, videoId, title, thumbnail } = req.body;
  

  Favorito.create(
    
    { idUsuario, videoId, title, thumbnail },
    (error, results) => {
      if (error) {
        console.error("Error al insertar favorito:", error.stack);
        res.status(500).send("Error al insertar favorito");
        return;
      }
      res.status(201).send("Favorito creado con éxito");
    }
  );
};

export const getFavoritosByUser = (req,res)=>{
    const {idUsuario} = req.params
    Favorito.getFavoritosByUser({idUsuario}, (error, results)=>{
        if (error) {
            console.error('Error al obtener favritos:', error.stack);
            res.status(500).send('Error al obtener favoritos');
            return;
          }
          res.status(200).send(results);
    })
}
