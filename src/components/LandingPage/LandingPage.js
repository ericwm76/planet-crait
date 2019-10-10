import React, { Component } from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        quote: ''
      }
    }

    logIn = (props) => {
      const { loggedin } = props;
        
      loggedin(true)
    }

    render() {
        return(
            <section className='landing-page'>
                <div className='form-section'>
                  <h2 className='welcome-crait'>Welcome to Planet Crait</h2>
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
                      <button className='novice-btn btn'>Novice</button>
                      <button className='intermediate-btn btn'>Intermediate</button>
                      <button className='expert-btn btn'>Expert</button>
                    </div>
 
                    <Link to={`/movies`} className='submit-btn' onClick={() => this.logIn()} >Do. Or do not. Submit</Link>
                  </form>
                </div>
            </section>
        )
    }

}

export default LandingPage;