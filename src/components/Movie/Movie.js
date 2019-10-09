import React from 'react';
import './Movie.scss';

const Movie = ({id, title, year, url, selectMovie}) => {
  return (
    <section className='movie' onClick={() => selectMovie(url)}>
      <h2>Episode {id}: {title}</h2>
      <h3>{year}</h3>
    </section>
  )
}

export default Movie;