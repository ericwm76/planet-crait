import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';
import SideBar from '../SideBar/SideBar';
import ScrollText from '../ScrollText/ScrollText';
import PropTypes from 'prop-types';

const CharactersContainer = ({ characters, charactersPresent, movie }) => {
  const characterCards = characters.map((character, i) => {
    return (
      <Character
        name={character.name} 
        species={character.species}
        homeworldName={character.homeworldName}
        homeworldPop={character.homeworldPop}
        appearsIn={character.appearsIn}
        favorited={character.favorited}
        key={ i + character.name }
      /> 
    )
  })

  return (
    <section className='character-container'>
      <SideBar />
      {!charactersPresent && <ScrollText movie={movie}/>}
      {charactersPresent && <div>{characterCards}</div>}
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