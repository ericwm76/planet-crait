import React from 'react';
import './FavouritesContainer.scss';
import Favourite from '../Favourite/Favourite';
import SideBar from '../SideBar/SideBar';

const FavouritesContainer = (props) => {

    return (
      <section className='Favourites-container'>
        <SideBar />
        <Favourite />
      </section>
    ) 
}

export default FavouritesContainer;