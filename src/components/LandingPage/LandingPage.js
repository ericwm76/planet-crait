import React, { Component } from 'react';
import './LandingPage.scss';

class LandingPage extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        quote: ''
      }
    }

    render() {
        return(
            <section className='landing-page'>
                 <h2>Welcome to Planet Crait</h2>
              <form className='landing-form'>
                  <input className='name-input' 
                         type='text'
                         placeholder='Name of Jedi'
                         name='name'
                         value={this.state.name} />
                  <input className='quote-input' 
                         type='text'
                         placeholder='Your favourite Star Wars quote here'
                         name='quote'
                         value={this.state.title} />
                  <div className='fandom-level-btns'>
                    <button className='novice-btn'>Novice</button>
                    <button className='intermediate-btn'>Intermediate</button>
                    <button className='Expertnovice-btn'>Expert</button>
                  </div>
 
                  <button className='submit-btn' >Do. Or do not. Submit</button>
              </form>
            </section>
        )
    }

}

export default LandingPage;