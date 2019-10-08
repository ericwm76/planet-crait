import React, { Component } from 'react';
import './App.css';
import { getMovieData } from '../../apiCalls';



class App extends Component {
  constructor() {
    super();
    this.state = {
       movie: ''
    }
  }

  componentDidMount= () => {
    getMovieData('https://swapi.co/api/films/1/')
    .then(data => this.setState({ movie : data }))
  }

  render() {
    return (
      <section className="App">
         <h2>Episode {this.state.movie.episode_id}: {this.state.movie.title}</h2>
         <h3>{ this.state.movie.release_date && this.state.movie.release_date.split('-')[0]}</h3>
      </section>
    );
  }
}

export default App;
