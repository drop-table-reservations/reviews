import React from 'react';
import { shallow } from 'enzyme';
import Entry from '../Entry';
import sampleRestaurant from '../__data__/restaurant.data';

const review = sampleRestaurant.reviews[1];

describe('Entry component', () => {
  test('should render EntryUser and EntryContent', () => {
    const wrapper = shallow(<Entry review={review} />);
    expect(wrapper.find('EntryUser').length).toBe(1);
    expect(wrapper.find('EntryContent').length).toBe(1);
  });
});
