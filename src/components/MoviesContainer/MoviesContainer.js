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
        selectMovie={selectMovie}
        />
      )
    })

  return (
    <div>
      {movieCards}
    </div>  
  )
}

export default MoviesContainer