import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';
import sampleRestaurant from '../__data__/restaurant.data';

const { reviews } = sampleRestaurant;

describe('List component', () => {
  test('should render all reviewsToDisplay as entries', () => {
    const wrapper = shallow(<List reviewsToDisplay={reviews} />);
    expect(wrapper.find('Entry')).toHaveLength(3);
  });
});
