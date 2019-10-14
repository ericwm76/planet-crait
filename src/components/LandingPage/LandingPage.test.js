import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  let wrapper;
  const mockSetUsers = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LandingPage setUsers={mockSetUsers}/>)
  })

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update state when input is filled', () => {

     const updateState = {
       
     }
  })
}) 