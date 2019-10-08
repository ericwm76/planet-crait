import React, { Component } from 'react';
import './App.css';
import { getMovieData, getCharacters } from '../../apiCalls';
import MoviesContainer from '../MoviesContainer/MoviesContainer';



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
        <MoviesContainer selectMovie={this.selectMovie} />
      </section>
    );
  }
}

export default App;