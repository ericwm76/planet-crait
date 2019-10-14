import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';
import SideBar from '../SideBar/SideBar';

const CharactersContainer = ({ characters }) => {
  const characterCards = characters.map((character, i) => {
    return (
      <Character
        name={character.name}
        species={character.species}
        homeworldName={character.homeworldName}
        homeworldPop={character.homeworldPop}
        appearsIn={character.appearsIn}
        favorited={character.favorited}
        key={i}
      />
    )
  })

  return (
    <section className='character-container'>
      <SideBar />
      {characterCards}
    </section> 
  )
}

export default CharactersContainer;