import React, { Component } from 'react';
import './App.scss';
import { Route, Nav} from 'react-router-dom';
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
       characters: [],
       name: '',
       quote: '',
       rank: ''
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

  setUsers = (name, quote, rank) => {
    this.setState({
      name: name,
      quote: quote,
      rank: rank
    })
  }

  render() {
    return (
    <main className="App">
        <Route exact path='/' render={() => <LandingPage setUsers={this.setUsers} />} />
        <Route exact path='/movies' render={() => <MoviesContainer selectMovie={this.selectMovie} name={this.state.name} quote={this.state.quote} rank={this.state.rank} />} />
        <Route exact path='/characters' render={() => <CharactersContainer name={this.state.name} quote={this.state.quote} rank={this.state.rank}/>} />
        <Route exact path='/favourites' render={() => <FavouritesContainer name={this.state.name} quote={this.state.quote} rank={this.state.rank}/>} />
      </main>
    );
  }
}

export default App;