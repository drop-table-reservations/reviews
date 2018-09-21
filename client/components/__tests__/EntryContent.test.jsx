import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';
import EntryContent from '../EntryContent';
import sampleRestaurant from '../__data__/restaurant.data';

// test data declarations
const oneStarReview = sampleRestaurant.reviews[0];
const threeStarReview = sampleRestaurant.reviews[1];
const fiveStarReview = sampleRestaurant.reviews[2];

const dayAgoReview = oneStarReview;
const sevenDaysAgoReview = threeStarReview;
const dateReview = fiveStarReview;

const oneSentenceReview = oneStarReview;
const threeSentenceReview = threeStarReview;
const fiveSentenceReview = fiveStarReview;

describe('EntryContent header data', () => {
  beforeAll(() => {
    MockDate.set(new Date('2018-09-13T20:00:00.000Z'));
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('number of red stars should equal overallScore', () => {
    const wrapper1 = shallow(<EntryContent review={oneStarReview} />);
    const wrapper3 = shallow(<EntryContent review={threeStarReview} />);
    const wrapper5 = shallow(<EntryContent review={fiveStarReview} />);

    expect(wrapper1.find('EntryContent__Star')).toHaveLength(5);
    expect(wrapper1.find('EntryContent__Star[red=true]')).toHaveLength(1);
    expect(wrapper1.find('EntryContent__Star[red=false]')).toHaveLength(4);

    expect(wrapper3.find('EntryContent__Star')).toHaveLength(5);
    expect(wrapper3.find('EntryContent__Star[red=true]')).toHaveLength(3);
    expect(wrapper3.find('EntryContent__Star[red=false]')).toHaveLength(2);

    expect(wrapper5.find('EntryContent__Star')).toHaveLength(5);
    expect(wrapper5.find('EntryContent__Star[red=true]')).toHaveLength(5);
    expect(wrapper5.find('EntryContent__Star[red=false]')).toHaveLength(0);
  });

  // note: functionality displays hours ago as well (e.g. Dined 12 hours ago)
  test(`dined at string should be 'Dined a day ago' if dined in prev 24 hours`, () => {
    const wrapper = shallow(<EntryContent review={dayAgoReview} />);
    expect(wrapper.find('EntryContent__Dined').html()).toContain(
      'Dined a day ago',
    );
  });

  test(`dined at string should be 'Dined X days ago' if dined in last 7 days`, () => {
    const wrapper = shallow(<EntryContent review={sevenDaysAgoReview} />);
    expect(wrapper.find('EntryContent__Dined').html()).toContain(
      'Dined 7 days ago',
    );
  });

  test(`dined at string should be 'Dined on MM D, YYYY' if dined over 7 days ago`, () => {
    const wrapper = shallow(<EntryContent review={dateReview} />);
    expect(wrapper.find('EntryContent__Dined').html()).toContain(
      'Dined on September 5, 2018',
    );
  });

  test('should display correct ratings', () => {
    const wrapper1 = shallow(<EntryContent review={oneStarReview} />);
    expect(wrapper1.find('EntryContent__Category')).toHaveLength(4);
    expect(wrapper1.find('EntryContent__Rating')).toHaveLength(4);
    expect(
      wrapper1
        .find('EntryContent__Category')
        .at(0)
        .html(),
    ).toContain('>Overall<');
    expect(
      wrapper1
        .find('EntryContent__Rating')
        .at(0)
        .html(),
    ).toContain('>1<');

    const wrapper3 = shallow(<EntryContent review={threeStarReview} />);
    expect(
      wrapper3
        .find('EntryContent__Category')
        .at(1)
        .html(),
    ).toContain('>Food<');
    expect(
      wrapper3
        .find('EntryContent__Rating')
        .at(1)
        .html(),
    ).toContain('>3<');
    expect(
      wrapper3
        .find('EntryContent__Category')
        .at(2)
        .html(),
    ).toContain('>Service<');
    expect(
      wrapper3
        .find('EntryContent__Rating')
        .at(2)
        .html(),
    ).toContain('>3<');
    expect(
      wrapper3
        .find('EntryContent__Category')
        .at(3)
        .html(),
    ).toContain('>Ambience<');
    expect(
      wrapper3
        .find('EntryContent__Rating')
        .at(3)
        .html(),
    ).toContain('>3<');
  });
});

describe('EntryContent text data', () => {
  test('should render the correct review text', () => {
    const wrapper1 = shallow(<EntryContent review={oneSentenceReview} />);
    const wrapper3 = shallow(<EntryContent review={threeSentenceReview} />);
    const wrapper5 = shallow(<EntryContent review={fiveSentenceReview} />);
    expect(wrapper1.find('EntryContent__Text').html()).toContain(
      'This is a sample one star review.',
    );
    expect(wrapper3.find('EntryContent__Text').html()).toContain(
      'This is a sample three star review. This is a sample three star review. This is a sample three star review.',
    );
    expect(wrapper5.find('EntryContent__Text').html()).toContain(
      'This is a sample five star review. This is a sample five star review. This is a sample five star review. This is a sample five star review. This is a sample five star review.',
    );
  });
});
