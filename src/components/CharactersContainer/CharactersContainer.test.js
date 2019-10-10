import React from 'react';
import { shallow } from 'enzyme';
import CharactersContainer from './CharactersContainer';

describe('CharactersContainer', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CharactersContainer />)
    })

    it('should match snapshot with all data passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})