import React, { Component } from 'react';
import './App.css';
import { getMovieData } from '../../apiCalls';



class App extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  }

  componentDidMount= () => {
    getMovieData('https://swapi.co/api/films/1/')
    // .then(response => )
  }

  render() {
    return (
      <section className="App">
      
      </section>
    );
  }
}

export default App;
