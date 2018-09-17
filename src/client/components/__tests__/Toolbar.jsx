import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from '../Toolbar';
import sampleRestaurant from '../__data__/restaurant.data';

const mockFilterCategories = jest.fn((targetCategory) => targetCategory);
const { reviews } = sampleRestaurant;
const filteredReviews = reviews;
const activeFilters = {
  sort: 'newest',
  stars: null,
  categories: new Set(),
  page: 1,
};

describe('Toolbar component', () => {
  test('Toolbar renders all panel data', () => {
    const wrapper = shallow(
      <Toolbar
        filterCategories={mockFilterCategories}
        filteredReviews={filteredReviews}
        activeFilters={activeFilters}
      />,
    );
    expect(wrapper.find('Toolbar__Container')).toHaveLength(1);
    expect(wrapper.find('Toolbar__Header')).toHaveLength(2);
    expect(wrapper.find('Toolbar__FilterPanel')).toHaveLength(1);
    // 3 categories in test data, so 3 checkboxes present
    expect(wrapper.find('FilterCheckbox')).toHaveLength(3);
  });
});
