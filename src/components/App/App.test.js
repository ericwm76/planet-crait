import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App',() => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should update the state of name, quote, and rank', () => {

    wrapper.instance().updateState({name: 'Conchelo', quote: 'Do.Or Do Not', rank: 'expert'});

    expect(wrapper.state('name')).toEqual('Conchelo');
    expect(wrapper.state('quote')).toEqual('Do.Or Do Not');
    expect(wrapper.state('rank')).toEqual('expert');
  })
}) 
