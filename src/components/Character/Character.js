import React from 'react';
import './Character.scss';


const Character = ({ name, species, homeworldName, homeworldPop, appearsIn, favorited }) => {
  const films = appearsIn.map(film => {
    return (
      <p key={Date.now()}>{film}</p>
    )
  })
    
  return (
      <section className='character'>
        <h3>Name: {name}</h3>
        <p>Species: {species}</p>
        <p>Homeworld: {homeworldName}</p>
        <p>Population of Homeworld: {homeworldPop}</p>
        <div className='related-films'>
          <p>Appears in: </p>
          {films}
        </div>
        <div className='favourite-button'>
          <i className="fas fa-jedi"></i>
        </div>
      </section>
  )
}

export default Character;