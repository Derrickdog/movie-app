import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year} - <span className="type">{movie.Type}</span></p>
    </div>
  )
}

export default MovieCard