import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
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
       rank: '',
       charactersPresent: false,
       favourites: []
    }
  }

  selectMovie = (movie) => {
    getMovieData(movie)
     .then(data => {
      this.setState({ movie : data, moviePresent : true})
      
      getCharacters(this.state.movie.characters)
        .then(data => this.setState({ characters: data , charactersPresent: true}))
    })
  }

  setUsers = (name, quote, rank) => {
    this.setState({
      name: name,
      quote: quote,
      rank: rank
    })
  }

  updateFavourites = (character) => {
    this.setState({
      favourites: [...this.state.favourites, character]
    });
    console.log(this.state.favourites)
  }

  render() {
    return (
      <main className="App">
        <Route exact path='/' render={() => <LandingPage setUsers={this.setUsers} />} />
        <Route exact path='/movies' render={() => <MoviesContainer selectMovie={this.selectMovie} name={this.state.name} quote={this.state.quote} rank={this.state.rank} />} />
        <Route exact path='/movies/:id' render={() => <CharactersContainer movie={this.state.movie} charactersPresent={this.state.charactersPresent} characters={this.state.characters} name={this.state.name} quote={this.state.quote} rank={this.state.rank} updateFavourites={this.updateFavourites}/>} />
        <Route exact path='/favourites' render={() => <FavouritesContainer name={this.state.name} quote={this.state.quote} rank={this.state.rank} favourites={this.state.favourites} updateFavourites={this.updateFavourites}/>}/>
        
      </main>
    );
  }
}

export default App;