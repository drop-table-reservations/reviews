import React from 'react';
import { shallow } from 'enzyme';
import FilterCheckbox from '../FilterCheckbox';

const mockFilterCategories = jest.fn((targetCategory) => targetCategory);

describe('FilterCheckbox component', () => {
  test('should render icon and paragraph', () => {
    const wrapper = shallow(
      <FilterCheckbox
        label="Good for Groups"
        filterCategories={mockFilterCategories}
        checked
      />,
    );
    expect(wrapper.find('FilterCheckbox__Container')).toHaveLength(1);
    expect(wrapper.find('FilterCheckbox__Icon')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('should render paragraph as label', () => {
    const wrapper = shallow(
      <FilterCheckbox
        label="Good for Groups"
        filterCategories={mockFilterCategories}
        checked
      />,
    );
    expect(wrapper.find('p').html()).toContain('Good for Groups');
  });

  test('should render checked icon if checked is true', () => {
    const wrapper = shallow(
      <FilterCheckbox
        label="Good for Groups"
        filterCategories={mockFilterCategories}
        checked
      />,
    );
    expect(wrapper.find('FilterCheckbox__Icon').html()).toContain(
      'fa fa-check-square-o',
    );
  });

  test('should render unchecked icon if checked is false', () => {
    const wrapper = shallow(
      <FilterCheckbox
        label="Good for Groups"
        filterCategories={mockFilterCategories}
        checked={false}
      />,
    );
    expect(wrapper.find('FilterCheckbox__Icon').html()).toContain(
      'fa fa-square-o',
    );
  });

  test('should invoke filterCategories with the dataset value of label', () => {
    const wrapper = shallow(
      <FilterCheckbox
        label="Good"
        filterCategories={mockFilterCategories}
        checked
      />,
    );
    expect(mockFilterCategories.mock.calls).toHaveLength(0);
    wrapper
      .find('FilterCheckbox__Container')
      .simulate('click', { currentTarget: { dataset: { value: 'Good' } } });
    expect(mockFilterCategories.mock.calls).toHaveLength(1);
    expect(mockFilterCategories.mock.calls[0][0]).toBe('Good');
  });
});
