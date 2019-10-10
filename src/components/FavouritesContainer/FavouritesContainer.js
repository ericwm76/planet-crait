import React from 'react';
import './FavouritesContainer.scss';
import Favourite from '../Favourite/Favourite';

const FavouritesContainer = (props) => {

    return (
      <section className='Favourites-container'>
        <Favourite />
      </section>
    )
}

export default FavouritesContainer;