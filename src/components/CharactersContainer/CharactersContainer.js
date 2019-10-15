import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';
import SideBar from '../SideBar/SideBar';
import ScrollText from '../ScrollText/ScrollText';

const CharactersContainer = ({ characters, charactersPresent, selectMovie }) => {
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
      {!charactersPresent && <ScrollText movie={selectMovie}/>}
      {charactersPresent && <div>{characterCards}</div>}
    </section> 
  )
}

export default CharactersContainer;