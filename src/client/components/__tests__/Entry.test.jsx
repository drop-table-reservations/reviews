import React from 'react';
import { shallow, mount } from 'enzyme';
import Entry from '../Entry';
import sampleRestaurant from '../__data__/restaurant.data';

const review = sampleRestaurant.reviews[1];

describe('Entry component', () => {
  test('should be selectable by class "entry"', () => {
    const wrapper = shallow(<Entry review={review} />);
    expect(wrapper.is('.entry')).toBe(true);
  });

  test('should mount in a full DOM', () => {
    const wrapper = mount(<Entry review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry').length).toBe(2);
  });
});
