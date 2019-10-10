import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Character />)
  })

  it('should match snapshot with all data passed in correctly', () => {
      expect(wrapper).toMatchSnapshot();
  })
})