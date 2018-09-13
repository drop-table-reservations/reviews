import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';
import EntryHeader from '../EntryHeader';
import sampleRestaurant from '../__data__/restaurant.data';

const oneStarReview = sampleRestaurant.reviews[0];
const threeStarReview = sampleRestaurant.reviews[1];
const fiveStarReview = sampleRestaurant.reviews[2];

const dayAgoReview = oneStarReview;
const sevenDaysAgoReview = threeStarReview;
const dateReview = fiveStarReview;

describe('EntryHeader component', () => {
  beforeAll(() => {
    MockDate.set(new Date('2018-09-13T20:00:00.000Z'));
  });

  afterAll(() => {
    MockDate.reset();
  });

  test('number of red stars should equal overallScore', () => {
    const wrapper1 = shallow(<EntryHeader review={oneStarReview} />);
    const wrapper3 = shallow(<EntryHeader review={threeStarReview} />);
    const wrapper5 = shallow(<EntryHeader review={fiveStarReview} />);

    expect(wrapper1.find('EntryHeader__Star')).toHaveLength(5);
    expect(wrapper1.find('EntryHeader__Star[red=true]')).toHaveLength(1);
    expect(wrapper1.find('EntryHeader__Star[red=false]')).toHaveLength(4);

    expect(wrapper3.find('EntryHeader__Star')).toHaveLength(5);
    expect(wrapper3.find('EntryHeader__Star[red=true]')).toHaveLength(3);
    expect(wrapper3.find('EntryHeader__Star[red=false]')).toHaveLength(2);

    expect(wrapper5.find('EntryHeader__Star')).toHaveLength(5);
    expect(wrapper5.find('EntryHeader__Star[red=true]')).toHaveLength(5);
    expect(wrapper5.find('EntryHeader__Star[red=false]')).toHaveLength(0);
  });

  // note: functionality displays hours ago as well (e.g. Dined 12 hours ago)
  test(`dined at string should be 'Dined a day ago' if dined in prev 24 hours`, () => {
    const wrapper = shallow(<EntryHeader review={dayAgoReview} />);
    expect(wrapper.find('EntryHeader__Dined').html()).toContain(
      'Dined a day ago',
    );
  });

  test(`dined at string should be 'Dined X days ago' if dined in last 7 days`, () => {
    const wrapper = shallow(<EntryHeader review={sevenDaysAgoReview} />);
    expect(wrapper.find('EntryHeader__Dined').html()).toContain(
      'Dined 7 days ago',
    );
  });

  test(`dined at string should be 'Dined on MM D, YYYY' if dined over 7 days ago`, () => {
    const wrapper = shallow(<EntryHeader review={dateReview} />);
    expect(wrapper.find('EntryHeader__Dined').html()).toContain(
      'Dined on September 5, 2018',
    );
  });

  test('should display correct ratings', () => {
    const wrapper1 = shallow(<EntryHeader review={oneStarReview} />);
    expect(wrapper1.find('EntryHeader__Category')).toHaveLength(4);
    expect(wrapper1.find('EntryHeader__Rating')).toHaveLength(4);
    expect(
      wrapper1
        .find('EntryHeader__Category')
        .at(0)
        .html(),
    ).toContain('>Overall<');
    expect(
      wrapper1
        .find('EntryHeader__Rating')
        .at(0)
        .html(),
    ).toContain('>1<');

    const wrapper3 = shallow(<EntryHeader review={threeStarReview} />);
    expect(
      wrapper3
        .find('EntryHeader__Category')
        .at(1)
        .html(),
    ).toContain('>Food<');
    expect(
      wrapper3
        .find('EntryHeader__Rating')
        .at(1)
        .html(),
    ).toContain('>3<');
    expect(
      wrapper3
        .find('EntryHeader__Category')
        .at(2)
        .html(),
    ).toContain('>Service<');
    expect(
      wrapper3
        .find('EntryHeader__Rating')
        .at(2)
        .html(),
    ).toContain('>3<');
    expect(
      wrapper3
        .find('EntryHeader__Category')
        .at(3)
        .html(),
    ).toContain('>Ambience<');
    expect(
      wrapper3
        .find('EntryHeader__Rating')
        .at(3)
        .html(),
    ).toContain('>3<');
  });
});
