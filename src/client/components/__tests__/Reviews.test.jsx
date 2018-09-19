import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../Reviews';
import sampleRestaurant from '../__data__/restaurant.data';

describe('Reviews component', () => {
  beforeAll(() => {
    fetch.mockResponse(JSON.stringify(sampleRestaurant.reviews));
  });

  afterAll(() => {
    fetch.resetMocks();
  });

  test('Reviews renders with fetched data', (done) => {
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    expect(wrapper.find('p').html()).toContain('<p>Loading</p>');
    setTimeout(() => {
      wrapper.update();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(wrapper.find('Summary')).toHaveLength(1);
      expect(wrapper.find('List')).toHaveLength(1);
      expect(wrapper.find('Pages')).toHaveLength(1);
      done();
    }, 10);
  });

  test('filterPage method changes page filter', (done) => {
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    setTimeout(() => {
      wrapper.update();
      const instance = wrapper.instance();
      expect(instance.filters.page).toBe(1);
      instance.filterPage(3);
      expect(instance.filters.page).toBe(3);
      done();
    }, 10);
  });

  test('filterStars method changes star filter', (done) => {
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    setTimeout(() => {
      wrapper.update();
      const instance = wrapper.instance();
      expect(instance.filters.stars).toBe(null);
      instance.filterStars(5);
      expect(instance.filters.stars).toBe(5);
      done();
    }, 10);
  });

  test('filterCategories method changes categories filter', (done) => {
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    setTimeout(() => {
      wrapper.update();
      const instance = wrapper.instance();
      // no categories
      expect(instance.filters.categories.size).toBe(0);
      // add category
      instance.filterCategories('Good for Groups');
      expect(instance.filters.categories.size).toBe(1);
      expect(instance.filters.categories.has('Good for Groups')).toBe(true);
      // adding same category removes it from filters
      instance.filterCategories('Good for Groups');
      expect(instance.filters.categories.size).toBe(0);
      expect(instance.filters.categories.has('Good for Groups')).toBe(false);
      done();
    }, 10);
  });

  test('sortReviews method sorts reviews array', (done) => {
    // 3 reviews:
    //    Stars: 1, 3, 5
    //    Dates: '2018-09-12T12:00:00.000Z', '2018-09-06T20:00:00.000Z', '2018-09-05T20:00:00.000Z'
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    setTimeout(() => {
      wrapper.update();
      const instance = wrapper.instance();
      // newest first by default
      const result = instance.reviews.map((review) => review.date);
      const expected = [
        '2018-09-12T12:00:00.000Z',
        '2018-09-06T20:00:00.000Z',
        '2018-09-05T20:00:00.000Z',
      ];
      expect(result).toEqual(expected);
      expect(instance.filters.sort).toBe('Newest');
      // sort by highest rated
      instance.sortReviews('Highest rating');
      const resultHigh = instance.reviews.map((review) => review.overallScore);
      const expectedHigh = [5, 3, 1];
      expect(resultHigh).toEqual(expectedHigh);
      expect(instance.filters.sort).toBe('Highest rating');
      // sort by lowest rated
      instance.sortReviews('Lowest rating');
      const resultLow = instance.reviews.map((review) => review.overallScore);
      const expectedLow = [1, 3, 5];
      expect(resultLow).toEqual(expectedLow);
      expect(instance.filters.sort).toBe('Lowest rating');
      done();
    }, 10);
  });

  test('setReviewsToDisplay method changes state', (done) => {
    const wrapper = shallow(<Reviews restaurantId={67806166} />);
    expect(wrapper.state()).toEqual({
      filteredReviews: null,
      reviewsToDisplay: null,
      restaurantId: 67806166,
    });
    setTimeout(() => {
      wrapper.update();
      const { filteredReviews, reviewsToDisplay } = wrapper.state();
      expect(filteredReviews).toBeInstanceOf(Array);
      expect(filteredReviews).toHaveLength(3);
      expect(reviewsToDisplay).toBeInstanceOf(Array);
      expect(filteredReviews).toHaveLength(3);
      done();
    }, 10);
  });

  test('applyFilters static method applies stars and category filters', () => {
    // 3 reviews:
    // _id: '67806166', '34823729', '68730078'
    // Stars: 1, 3, 5
    // Categories: 'Good for Groups', 'Casual', 'Great Beer'
    const { reviews } = sampleRestaurant;
    const categories = new Set();
    // test 1 star filter, no categories (empty set)
    const filtered1 = Reviews.applyFilters(reviews, 1, categories);
    expect(filtered1).toHaveLength(1);
    expect(filtered1[0]._id).toBe('67806166');
    // test null star filter, one categories ('Casual')
    categories.add('Casual');
    const filtered2 = Reviews.applyFilters(reviews, null, categories);
    expect(filtered2).toHaveLength(1);
    expect(filtered2[0]._id).toBe('34823729');
  });

  test('applyPage static method applies page', () => {
    const { reviews } = sampleRestaurant;
    // page 1 has 3 reviews
    const paged1 = Reviews.applyPage(reviews, 1);
    expect(paged1).toHaveLength(3);
    // page 2 has 0 reviews (only 3 total in set, there are 20 per page)
    const paged2 = Reviews.applyPage(reviews, 2);
    expect(paged2).toHaveLength(0); // only 3 reviews
  });
});
