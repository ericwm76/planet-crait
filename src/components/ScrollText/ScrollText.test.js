import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from './ScrollText';

describe('ScrollText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollText movie={ {episode_id: 4, opening_crawl: "Something something galactic something", title: "A New Pope"} }/>)
  })

  it('should match snapshot with all data passing in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})