import React from 'react';
import { shallow, mount } from 'enzyme';
import EntryUser from '../EntryUser';
import sampleRestaurant from '../__data__/restaurant.data';

const oneReview = sampleRestaurant.reviews[0];
const twoReviews = sampleRestaurant.reviews[1];

describe('EntryUser component', () => {
  test('should be selectable by class "entry-user"', () => {
    const wrapper = shallow(<EntryUser review={oneReview} />);
    expect(wrapper.is('.entry-user')).toBe(true);
  });

  test('should mount in a full DOM', () => {
    const wrapper = mount(<EntryUser review={oneReview} />);
    expect(wrapper.find('.entry-user').length).toBe(2);
  });

  test(`should display user's first name and last initial`, () => {
    const wrapper = mount(<EntryUser review={oneReview} />);
    expect(
      wrapper
        .find('EntryUser__UserNameLoc')
        .at(0)
        .html(),
    ).toContain('>AnastasiaH<');
  });

  test(`should display user's location`, () => {
    const wrapper = mount(<EntryUser review={oneReview} />);
    expect(
      wrapper
        .find('EntryUser__UserNameLoc')
        .at(1)
        .html(),
    ).toContain('>San Francisco<');
  });

  test(`should display number of users reviews`, () => {
    // 1 review (singular)
    const wrapper1 = mount(<EntryUser review={oneReview} />);
    expect(
      wrapper1
        .find('EntryUser__UserReviews')
        .at(0)
        .html(),
    ).toContain(' 1 review<');
    // 2+ reviews (plural)
    const wrapper2 = mount(<EntryUser review={twoReviews} />);
    expect(
      wrapper2
        .find('EntryUser__UserReviews')
        .at(0)
        .html(),
    ).toContain(' 2 reviews<');
  });

  test(`should display user's initials in avatar`, () => {
    const wrapper = mount(<EntryUser review={oneReview} />);
    expect(
      wrapper
        .find('EntryUser__Avatar')
        .at(0)
        .html(),
    ).toContain('>AH<');
  });
});
