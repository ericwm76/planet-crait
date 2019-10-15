import React from 'react';
import './FavouritesContainer.scss';
import Favourite from '../Favourite/Favourite';
import SideBar from '../SideBar/SideBar';
import Character from '../Character/Character';

const FavouritesContainer = (props) => {
  const characterCards = props.favourites.map((character, i) => {
    return (
      <Character
        character={character}
        updateFavourites={props.updateFavourites}
        key={ i + character.name }
      /> 
    )
  })
    return (
      <section className='Favourites-container'>
        <SideBar />
        {characterCards}
      </section> 
    ) 
}

export default FavouritesContainer;