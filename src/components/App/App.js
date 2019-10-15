import React, { Component } from 'react';
import './App.scss';
import { Route, Nav} from 'react-router-dom';
import { getMovieData, getCharacters } from '../../apiCalls';
import sampleCharacters from '../../SampleCharacterData'

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import LandingPage from '../LandingPage/LandingPage';
import ScrollText from '../ScrollText/ScrollText';


class App extends Component { 
  constructor() {
    super();
    this.state = {
       movie: {},
       characters: [],
       name: '',
       quote: '',
       rank: '',
       crawl: ''
    }
  }

  selectMovie = (movie) => {
    getMovieData(movie)
     .then(data => {
      this.setState({ movie : data, crawl : data.opening_crawl})
      
      getCharacters(this.state.movie.characters)
        .then(data => this.setState({ characters: data }))
        .then(console.log(this.state.characters))
    })
  }

  getSampleCharacters = () => {
    this.setState(() => ({ characters: sampleCharacters }));
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
        <Route exact path='/movies/:id' render={() => <CharactersContainer characters={this.state.characters} name={this.state.name} quote={this.state.quote} rank={this.state.rank}/>} />
        <Route exact path='/favourites' render={() => <FavouritesContainer name={this.state.name} quote={this.state.quote} rank={this.state.rank}/>} />
        <ScrollText movie={this.state.movie}/>
      </main>
    );
  }
}

export default App;