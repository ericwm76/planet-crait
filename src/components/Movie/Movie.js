import React from 'react';
import './Movie.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({id, title, year, url, img, selectMovie}) => {
  return (
    <section className='movie' onClick={() => selectMovie(url)}>
      <img src={img} alt={title} />
      <h3>Episode {id}:</h3>
      <h2>{title}</h2> 
      <h3>{year}</h3>
      <Link to={`/movies/${id}`}>View Characters</Link>
    </section>
  )  
}

export default Movie;

Movie.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  selectMovie: PropTypes.func
}