import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage', () => {
  let wrapper, mockEvent;
  const mockSetUsers = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<LandingPage setUsers={mockSetUsers}/>)
    mockEvent = {
      preventDefault: jest.fn(), 
      target: { name: 'level', value: 'Expert', keyCode: 13 }
    }
  });

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleChange on change', () => {
    wrapper.instance().handleChange = jest.fn();

    wrapper.find('.name-input').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();

    wrapper.find('.quote-input').simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call handleChange on click of rank buttons', () => {
    wrapper.instance().handleChange = jest.fn();

    wrapper.find('.novice-btn').simulate('click', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();

    wrapper.find('.intermediate-btn').simulate('click', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();

    wrapper.find('.expert-btn').simulate('click', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should update state when handleChange is run', () => {
    wrapper.instance().handleChange = jest.fn(() => 'Expert')

    wrapper.find('.expert-btn').simulate('click', mockEvent);
    expect(wrapper.state('level')).toEqual('Expert');
  });

  it('should call updateName on clicking Submit btn', () => {
    wrapper.instance().updateName = jest.fn();

    wrapper.setState({
      name: 'Chachi',
      quote: 'Live long',
      level: 'Expert'
    })
    
    wrapper.find('.submit-btn').simulate('click');
    expect(wrapper.instance().updateName).toHaveBeenCalled();
  })
});