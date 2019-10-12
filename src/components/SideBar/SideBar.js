import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';

const SideBar = ({name, quote, rank}) => {
  return (
   <nav>
     <section className='user-info'>
       <image src='' alt='' />
       <h2>{name}</h2>
       <p>{quote}</p> 
       <p>{rank}</p>
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