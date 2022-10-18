import React from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'http://www.omdbapi.com/?apikey=aeabd256'

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <div className="search">
        <input placeholder="Enter Movie" value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} />
        <button className="button" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>
      <div className="container">
        {movies?.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
