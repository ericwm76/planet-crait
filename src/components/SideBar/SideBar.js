import React from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.scss';

const SideBar = ({name, quote, rank}) => {
  return (
   <nav>
     <section className='user-info'>
       <div>
         <img className='user-image' src='https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/10/star-wars-8-porg-920x584.png' alt='porg' />
       </div>
       <div className='user-section'>
         <h2>{name}</h2>
         <p>{quote}</p> 
         <p>{rank}</p>
       </div>
     </section>

     <section className='nav-links'>
       <NavLink exact to='/movies' className='nav'> Movies </NavLink>
       <NavLink exact to='/favourites' className='nav'> Favourites </NavLink>
       <NavLink exact to='/' className='nav'> Sign out </NavLink>
     </section>
   </nav>
  )
}

export default SideBar;