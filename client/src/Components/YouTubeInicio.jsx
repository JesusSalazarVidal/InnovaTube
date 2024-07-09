import React, { useState } from "react";
import axios from "axios";
import { useInnova } from "../Context/InnovaContext";

function YouTubeInicio({Usuario}) {
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState([]);
  const {createFavorito} = useInnova()

  const API_KEY = "AIzaSyChdE5gdQl_5WROBYrGG1ym6e4RMS7-90I";

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          key: API_KEY,
          maxResults: 12,
        },
      }
    );
    setVideos(response.data.items);
  };
  const handleFavorite = (video) => {
    console.log("favorito add")
    if (Usuario) {
        createFavorito( {
          idUsuario: Usuario.id,
          videoId: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.default.url
        });
        
      } else {
        alert('Please sign in to save favorites');
      }
  };

  return (
    <div className="container mx-auto p-4">
  <form onSubmit={handleSearch} className="flex flex-col items-center space-y-4 mb-4">
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for videos"
      className="w-full md:w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Buscar
    </button>
  </form>
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {videos.map((video) => (
      <div key={video.id.videoId} className="bg-white p-4 rounded shadow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2">{video.snippet.title}</h3>
          <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
            className="w-full rounded mb-2"
          />
        </div>
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => handleFavorite(video)}
        >
          Marcar como favorito
        </button>
      </div>
    ))}
  </div>
</div>
  );
}

export default YouTubeInicio;
