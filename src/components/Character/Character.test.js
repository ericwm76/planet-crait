import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character', () => {
  let wrapper;
  let character = {name: "Luke Skywalker", species: "Human", homeworldName: "Tatooine", homeworldPop: "200000", appearsIn: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "Revenge of the Sith", "The Force Awakens"], favorited: false};

  beforeEach(() => {
    wrapper = shallow(<Character  
      name={character.name} 
      species={character.species}
      homeworldName={character.homeworldName}
      homeworldPop={character.homeworldPop}
      appearsIn={character.appearsIn}
      favorited={character.favorited}/>)
  })

  it('should match snapshot with all data passed in correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
})