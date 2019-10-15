import React from 'react';
import './MoviesContainer.scss';
import initialMovies from '../../initialData';
import Movie from '../Movie/Movie'
import SideBar from '../SideBar/SideBar';

const MoviesContainer = ({selectMovie, name, quote, rank}) => {
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
      <SideBar name={name}
               quote={quote}
               rank={rank}/>
      {movieCards}
    </section>  
  )
}

export default MoviesContainer