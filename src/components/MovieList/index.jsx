import React from 'react';
import '../MovieList/style.css';
import Movie from '../Movie';

//import movies from '../movies';

const MovieList = () => {
  return (
    <div className="movie__list">
      {plays.map(film => (
        <Movie
          key={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          director={film.director}
          poster={film.poster}
          cast={film.cast}
          rating={film.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;