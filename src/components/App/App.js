import React, { Component } from 'react';
import './App.css';
import { getMovieData } from '../../apiCalls';
import initialMovies from '../../initialData';
import MoviesContainer from '../MoviesContainer/MoviesContainer';



class App extends Component {
  constructor() {
    super();
    this.state = {
       movie: ''
    }
  }

  componentDidMount = () => {
    getMovieData('https://swapi.co/api/films/1/')
    .then(data => this.setState({ movie : data }))
  }

  render() {
    return (
      <section className="App">
        <MoviesContainer />
      </section>
    );
  }
}

export default App;