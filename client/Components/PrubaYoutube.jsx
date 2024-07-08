import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const YouTubeSearch = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const API_KEY = 'AIzaSyChdE5gdQl_5WROBYrGG1ym6e4RMS7-90I';

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: API_KEY
      }
    });
    setVideos(response.data.items);
  };

  const handleSignIn = async () => {
    const identificador = prompt('Please enter your email:');
    const password = prompt('Please enter your password:');
    const response = await axios.post('http://localhost:3000/login', { identificador, password });
    setUser(response.data);
    loadFavorites(response.data.id);
  };

  const handleSignOut = () => {
    setUser(null);
    setFavorites([]);
  };

  const handleFavorite = async (video) => {
    if (user) {
      await axios.post('http://localhost:3000/favorito', {
        idUsuario: user.id,
        videoId: video.id.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.default.url
      });
      loadFavorites(user.id);
    } else {
      alert('Please sign in to save favorites');
    }
  };

  const loadFavorites = async (userId) => {
    const response = await axios.get(`http://localhost:3000/favoritos/${userId}`);
    setFavorites(response.data);
  };

  const checkIfFavorite = (videoId) => {
    return favorites.some(fav => fav.videoId === videoId);
  };

  useEffect(() => {
    if (user) {
      loadFavorites(user.id);
    }
  }, [user]);

  return (
    <div>
      <button onClick={user ? handleSignOut : handleSignIn}>
        {user ? 'Sign Out' : 'Sign In'}
      </button>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for videos"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <button onClick={() => handleFavorite(video)}>
              <FontAwesomeIcon icon={checkIfFavorite(video.id.videoId) ? solidHeart : regularHeart} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeSearch;
