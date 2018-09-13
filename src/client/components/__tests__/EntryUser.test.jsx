import React from 'react';
import { shallow, mount } from 'enzyme';
import EntryUser from '../EntryUser';
import sampleRestaurant from '../__data__/restaurant.data';

const review = sampleRestaurant.reviews[1];

describe('EntryUser component', () => {
  test('should be selectable by class "entry-user"', () => {
    const wrapper = shallow(<EntryUser review={review} />);
    expect(wrapper.is('.entry-user')).toBe(true);
  });

  test('should mount in a full DOM', () => {
    const wrapper = mount(<EntryUser review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

  /*
    test('should render users location', () => {
    const wrapper = mount(<EntryUser review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

      test('should render number of users reviews', () => {
    const wrapper = mount(<EntryUser review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

        test('should add initials in avatar', () => {
    const wrapper = mount(<EntryUser review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

         test('should render avatar as in color scheme', () => {
    const wrapper = mount(<EntryUser review={review} />);
    // TODO: use wrapper.debug() to explore how styled components show twice
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

  */
});
