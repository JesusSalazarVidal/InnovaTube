import React, { useEffect, useState } from "react";
import { useInnova } from "../Context/InnovaContext";
import { useNavigate } from "react-router-dom";

function ListFavoritos() {
  const { Usuario, getFavoritosByUser, videos } = useInnova();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate() 

  useEffect(() => {
    if (Usuario && Usuario.user && Usuario.user.id) {
      getFavoritosByUser(Usuario.user.id)
        .then((data) => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching favoritos:", error);
          setIsLoading(false);
        });
    } else {
        navigate("/login")
    }
  }, [Usuario]);

  if (isLoading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="bg-white p-4 rounded shadow flex flex-col justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold mb-2">
              {video.title}
            </h3>
            <img
              src={video.thumbnails}
              alt={video.title}
              className="w-full rounded mb-2"
            />
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            onClick={() => handleFavorite(video)}
          >
            Eliminar Favorito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListFavoritos;
