import React, { Component } from 'react';
import './LandingPage.scss';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';

class LandingPage extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
        quote: '',
        level: ''
      }
    }

    handleChange = (e) =>{
      e.preventDefault();
      this.setState({ [e.target.name] : e.target.value })
    }

    updateName = () => {
       const { setUsers } = this.props;
       setUsers(this.state.name, this.state.quote, this.state.level);
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
                         value={this.state.name} 
                         onChange={(e) => {this.handleChange(e)}} />
                    <input className='quote-input' 
                         type='text'
                         placeholder='Your favourite Star Wars quote here'
                         name='quote'
                         value={this.state.title} 
                         onChange={(e) => {this.handleChange(e)}}/>
                    <div className='fandom-level-btns'>
                      <button className='novice-btn btn' 
                              name='level' 
                              value='Novice'
                              onClick={(e) => this.handleChange(e)}>
                              Novice 
                      </button>
                      <button className='intermediate-btn btn' 
                              name='level' 
                              value='Intermediate'
                              onClick={(e) => this.handleChange(e)}>
                              Intermediate
                      </button>
                      <button className='expert-btn btn' 
                              name='level' 
                              value='Expert'
                              onClick={(e) => this.handleChange(e)}>
                                Expert
                      </button>
                    </div>
 
                    <Link to={`/movies`} className='submit-btn' onClick={this.updateName}>Do. Or do not. Submit</Link>
                  </form>
                </div>
            </section>
        )
    }

}

export default LandingPage;