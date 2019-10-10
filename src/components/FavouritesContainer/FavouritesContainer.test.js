import React from 'react';
import { shallow } from 'enzyme';
import FavouritesContainer from './FavouritesContainer';

describe('FavouritesContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FavouritesContainer />)
  })
  
  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})