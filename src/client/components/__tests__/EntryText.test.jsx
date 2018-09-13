import React from 'react';
import { shallow } from 'enzyme';
import EntryText from '../EntryText';
import sampleRestaurant from '../__data__/restaurant.data';

const oneSentenceReview = sampleRestaurant.reviews[0];
const threeSentenceReview = sampleRestaurant.reviews[1];
const fiveSentenceReview = sampleRestaurant.reviews[2];

describe('EntryText component', () => {
  test('should render the correct review text', () => {
    const wrapper1 = shallow(<EntryText review={oneSentenceReview} />);
    const wrapper3 = shallow(<EntryText review={threeSentenceReview} />);
    const wrapper5 = shallow(<EntryText review={fiveSentenceReview} />);
    expect(wrapper1.find('EntryText__Text').html()).toContain(
      'This is a sample one star review.',
    );
    expect(wrapper3.find('EntryText__Text').html()).toContain(
      'This is a sample three star review. This is a sample three star review. This is a sample three star review.',
    );
    expect(wrapper5.find('EntryText__Text').html()).toContain(
      'This is a sample five star review. This is a sample five star review. This is a sample five star review. This is a sample five star review. This is a sample five star review.',
    );
  });
});
