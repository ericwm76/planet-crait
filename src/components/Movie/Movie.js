import React from 'react';
import './Movie.scss';

const Movie = ({id, title, year}) => {
  return (
    <div>
      <h2>Episode {id}: {title}</h2>
      <h3>{year}</h3>
    </div>
  )
}

export default Movie;