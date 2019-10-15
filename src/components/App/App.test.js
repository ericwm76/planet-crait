import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getMovieData, getCharacters } from '../../apiCalls';

jest.mock('../../apiCalls.js');

describe('App',() => {
  let wrapper;
  let mockMovieData;
  let mockCharacters;

  beforeEach(() => {
    wrapper = shallow(<App />);

    mockMovieData = {
      url: "https://swapi.co/api/films/4/",
      episode_id: 1,
      title: "The Phantom Menace",
      release_date: "1999",
      img: "https://images-na.ssl-images-amazon.com/images/I/51o6zchqOFL.jpg"
    };

    mockCharacters = [
      {name: "Luke Skywalker", species: "Human", homeworldName: "Tatooine", homeworldPop: "200000", appearsIn: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "Revenge of the Sith", "The Force Awakens"], favorited: false},
      {name: "C-3PO", species: "Droid", homeworldName: "Tatooine", homeworldPop: "200000", appearsIn: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"], favorited: false}
      ];

    getMovieData.mockImplementation(() => {
      return Promise.resolve(mockMovieData)
    });
    
    getCharacters.mockImplementation(() => {
      return Promise.resolve(mockCharacters)
    });
  });

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update the state of name, quote, and rank', () => {

    wrapper.instance().setUsers('Conchelo', 'Do.Or Do Not', 'expert');

    expect(wrapper.state('name')).toEqual('Conchelo');
    expect(wrapper.state('quote')).toEqual('Do.Or Do Not');
    expect(wrapper.state('rank')).toEqual('expert');
  });

  it('should update state when selectMovie is invoked', async () => {
    await wrapper.instance().selectMovie();
    expect(wrapper.state('movie')).toEqual(mockMovieData)
  });

  it('should call getMovieData and getCharacters when selectMovie is called', () => {
    wrapper.instance().selectMovie();

    expect(getMovieData).toHaveBeenCalled();
    // expect(getCharacters).toHaveBeenCalled();
  });
}); 