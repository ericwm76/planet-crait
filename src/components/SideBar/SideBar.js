import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
   <nav>
     <section className='user-info'>
       <image src='' alt='' />
       <h2>Name</h2>
       <p>Favorite quote: </p>
       <p>Rank: </p>
     </section>

     <section className='nav-links'>
       <NavLink exact to='/movies' className='nav'> Movies </NavLink>
       <NavLink exact to='/characters' className='nav'> Characters </NavLink>
       <NavLink exact to='/favourites' className='nav'> Favourites </NavLink>
       <NavLink exact to='/' className='nav'> Sign out </NavLink>
     </section>
   </nav>
  )
}

export default SideBar;