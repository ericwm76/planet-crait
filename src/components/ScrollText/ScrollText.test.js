import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from './ScrollText';

describe('ScrollText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollText />)
  })

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})