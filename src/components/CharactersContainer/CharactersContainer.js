import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';

const CharactersContainer = (props) => {

    return (
      <section className='character-container'>
        <Character />
      </section>
    )
}

export default CharactersContainer;