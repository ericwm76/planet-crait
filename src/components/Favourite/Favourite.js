import React from 'react';
import './Favourite.scss';

const Favourite = (props) => {
  return (
      <section className='favourite'>
        <h3>Name</h3>
        <p>Homeworld</p>
        <p>Population of Homeworld</p>
        <p>Species</p>
        <div className='related-films'>
          <p>Related Films</p>

        </div>
        <div className='favourite-button'>
        <i className="fas fa-jedi"></i>
        </div>
      </section>
  ) 
}

export default Favourite ;