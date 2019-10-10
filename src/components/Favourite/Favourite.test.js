import React from 'react';
import { shallow } from 'enzyme';
import Favourite from './Favourite';


describe('Favourite', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Favourite />)
  })

  it('should match snapshot with all data being passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})