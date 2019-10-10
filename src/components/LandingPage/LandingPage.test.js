import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  let wrapper;

  describe(() => {
    wrapper = shallow(<LandingPage />)
  })

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})