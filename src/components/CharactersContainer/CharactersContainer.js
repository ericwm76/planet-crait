import React from 'react';
import './CharactersContainer.scss';
import Character from '../Character/Character';
import SideBar from '../SideBar/SideBar';

const CharactersContainer = (props) => {

    return (
      <section className='character-container'>
        <SideBar />
        <Character />
      </section> 
    )
}

export default CharactersContainer;