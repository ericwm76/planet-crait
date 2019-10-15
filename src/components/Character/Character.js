import React from 'react';
import './Character.scss';
import PropTypes from 'prop-types';

const Character = ({ name, species, homeworldName, homeworldPop, appearsIn, updateFavourite }) => {
  const films = appearsIn.map((film, i) => {
    return (
      <p key={Math.random()}>{film}</p>
    )
  })
    
  return (
      <section className='character'>
         <div className='favourite-button' onClick={updateFavourite}>
          <i className="fas fa-jedi"></i>
        </div>
        <h2>Name:</h2>
           <p>{name}</p>
        <h2>Species: </h2>
          {species}
        <h2>Homeworld: </h2>
          {homeworldName}
        <h2>Population of Homeworld: </h2>
           {homeworldPop}
        <div className='related-films'>
        <h2>Appears in: </h2>
             {films}
        </div>
      </section>
  )
}

export default Character;

Character.propTypes = { 
  name: PropTypes.string, 
  species: PropTypes.string, 
  homeworldName: PropTypes.string, 
  homeworldPop: PropTypes.string, 
  appearsIn: PropTypes.array, 
  favorited: PropTypes.bool 
}
