import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';
import SideBar from '../SideBar/SideBar';
import ScrollText from '../ScrollText/ScrollText';
import PropTypes from 'prop-types';

const CharactersContainer = ({ characters, charactersPresent, movie, updateFavourite }) => {
  const characterCards = characters.map((character, i) => {
    return (
      <Character
        character={character}
        updateFavourite={updateFavourite}
        key={ i + character.name }
      /> 
    )
  })

  return (
    <section className='character-container'>
      <SideBar />
      {!charactersPresent && <img src='https://i.gifer.com/24S3.gif' alt='bb8 loader'/>}
      {charactersPresent && <div><ScrollText movie={movie} /> {characterCards}</div>}
    </section> 
  )
}

export default CharactersContainer;

CharactersContainer.propTypes = {
  movie: PropTypes.object,
  charactersPresent: PropTypes.bool, 
  characters: PropTypes.array,
  name: PropTypes.string,
  quote: PropTypes.string,
  rank: PropTypes.string
}