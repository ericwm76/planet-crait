import React from 'react';
import './MoviesContainer.scss';
import initialMovies from '../../initialData';
import Movie from '../Movie/Movie'

const MoviesContainer = ({selectMovie}) => {
  const movieCards = initialMovies.map(movie => {
      return (<Movie 
        key={movie.episode_id} 
        id={movie.episode_id} 
        title={movie.title} 
        year={movie.release_date}
        url={movie.url}
        img={movie.img}
        selectMovie={selectMovie}
        />
      )
    })

  return (
    <section className='movies-container'>
      {movieCards}
    </section>  
  )
}

export default MoviesContainer