import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';

const Movie = ({id, title, year, url, img, selectMovie}) => {
  return (
    <section className='movie' onClick={() => selectMovie(url)}>
     {/* <Link to={`/characters/`} key={id}> */}
      <img src={img} alt={title} />
      <h2>Episode {id}: {title}</h2>
      <h3>{year}</h3>
     {/* </Link> */}
    </section>
  )  
}

export default Movie;