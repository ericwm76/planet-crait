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
       favourite: []
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

  updateFavourite = (character) => {
    console.log(character)
    //  let updatedFavourite = this.state.favourite.push(card);

    //  this.setState({ favourite : updatedFavourite});

    // console.log('hello')
  }

  render() {
    return (
      <main className="App">
        <Route exact path='/' render={() => <LandingPage setUsers={this.setUsers} />} />
        <Route exact path='/movies' render={() => <MoviesContainer selectMovie={this.selectMovie} name={this.state.name} quote={this.state.quote} rank={this.state.rank} />} />
        <Route exact path='/movies/:id' render={() => <CharactersContainer movie={this.state.movie} charactersPresent={this.state.charactersPresent} characters={this.state.characters} name={this.state.name} quote={this.state.quote} rank={this.state.rank} updateFavourite={this.updateFavourite}/>} />
        <Route exact path='/favourites' render={() => <FavouritesContainer name={this.state.name} quote={this.state.quote} rank={this.state.rank}/>} />
        
      </main>
    );
  }
}

export default App;