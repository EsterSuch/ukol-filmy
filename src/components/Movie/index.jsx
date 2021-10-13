import React from 'react';
import '../Movie/style.css';
import Actor from '../Actor';

import '../assets';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <div className="movie">
        <div className="movie__pic">
          <img src={poster} alt="poster" />
        </div>

        <div className="movie__desc">
          <div className="movie__item">
            <h3>{title}</h3>
            <p><b>Rok vydání:</b> {year}</p>
            <p>Rating: {rating}/10</p>
            <p><b>Žánr:</b> {genre}</p>
            <p><b>Režie:</b> {director}</p>
          </div>

          <div className="roles__actors">
            <p>V hlavních rolích:</p>
          </div>

          <div className="roles">
            {cast.map((act) => (
              <Actor key={act.name} name={act.name} as={act.as} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;