import React from 'react';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

describe('SideBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideBar />)
  })

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})