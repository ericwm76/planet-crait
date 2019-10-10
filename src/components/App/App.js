import React, { Component } from 'react';
import './App.scss';
import { getMovieData, getCharacters } from '../../apiCalls';

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
       movie: {},
       characters: []
    }
  }

  componentDidMount = () => {
   
  }

  selectMovie = (movie) => {
    getMovieData(movie)
     .then(data => {
      this.setState({ movie : data });
      
      getCharacters(this.state.movie.characters)
        .then(data => this.setState({ characters: data }))
        .then(console.log(this.state.characters))
    })
  }

  render() {
    return (
      <section className="App">
        <LandingPage />
        <MoviesContainer selectMovie={this.selectMovie} />
        <CharactersContainer />
        <FavouritesContainer />
      </section>
    );
  }
}

export default App;