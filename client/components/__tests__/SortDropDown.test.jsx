import React from 'react';
import { shallow } from 'enzyme';
import SortDropDown from '../SortDropDown';

const mockSortReviews = jest.fn((targetSort) => targetSort);

//      <SortDropDown sort={sort} sortReviews={sortReviews} />

describe('SortDropDown component', () => {
  test('if not expanded, renders selected option (sort)', () => {
    const wrapper = shallow(
      <SortDropDown sort="Highest rating" sortReviews={mockSortReviews} />,
    );
    expect(wrapper.find('SortDropDown__SelectedOption')).toHaveLength(1);
    expect(wrapper.find('SortDropDown__SelectedOption').html()).toContain(
      'Highest rating',
    );
  });

  test('if expanded, renders selected option (sort) and menu with three options', () => {
    const wrapper = shallow(
      <SortDropDown sort="Highest rating" sortReviews={mockSortReviews} />,
    );
    wrapper.find('SortDropDown__Container').simulate('click');
    expect(wrapper.find('SortDropDown__SelectedOption')).toHaveLength(1);
    expect(wrapper.find('SortDropDown__SelectedOption').html()).toContain(
      'Highest rating',
    );
    expect(wrapper.find('SortDropDown__Menu')).toHaveLength(1);
    expect(wrapper.find('SortCheckbox')).toHaveLength(3);
  });
});
