import React from 'react';
import { shallow } from 'enzyme';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {
    let wrapper;
    let mockCharacters = [
      {name: "Luke Skywalker", species: "Human", homeworldName: "Tatooine", homeworldPop: "200000", appearsIn: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "Revenge of the Sith", "The Force Awakens"], favorited: false},
      {name: "C-3PO", species: "Droid", homeworldName: "Tatooine", homeworldPop: "200000", appearsIn: ["The Empire Strikes Back", "Return of the Jedi", "A New Hope", "The Phantom Menace", "Attack of the Clones", "Revenge of the Sith"], favorited: false}
      ];
    let mockName = 'Potatoe';
    let mockQuote = 'Do. Or Do not';
    let mockRank = 'Expert'

    beforeEach(() => {
      wrapper = shallow(<CharactersContainer characters={mockCharacters} name={mockName} quote={mockQuote} rank={mockRank}/>)
    })

    it('should match snapshot with all data passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})