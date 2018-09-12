import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../Reviews';

describe('Reviews component', () => {
  test('it should be selectable by id "reviews"', () => {
    expect(shallow(<Reviews />).is('#reviews')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<Reviews />).find('#reviews').length).toBe(1);
  });
});
