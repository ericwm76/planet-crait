import React, { Component } from 'react';
import './App.scss';
import { Route, Nav} from 'react-router-dom';
import { getMovieData, getCharacters } from '../../apiCalls';

import MoviesContainer from '../MoviesContainer/MoviesContainer';
import CharactersContainer from '../CharactersContainer/CharactersContainer';
import FavouritesContainer from '../FavouritesContainer/FavouritesContainer';
import LandingPage from '../LandingPage/LandingPage';
import SideBar from '../SideBar/SideBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
       movie: {},
       characters: [],
       isLoggedIn: false
    }
  }

  componentDidMount = () => {
   
  }

  logIn = () => {
    this.setState({isLoggedIn: true})
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
    <main className="App">
        <Route exact path='/' render={() => <LandingPage logIn={this.logIn} />} />
        <Route exact path='/movies' render={() => <MoviesContainer selectMovie={this.selectMovie} />} />
        {this.state.isLoggedIn && <Route exact path='/movies' render={() => <SideBar />}/>} 
        <Route exact path='/characters' render={() => <CharactersContainer />} />
        <Route exact path='/favourites' render={() => <FavouritesContainer />} />
      </main>
    );
  }
}

export default App;