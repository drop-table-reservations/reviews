import React from 'react';
import { shallow } from 'enzyme';
import SortCheckbox from '../SortCheckbox';

const mockSortReviews = jest.fn((targetSort) => targetSort);

/*
  const { label, checked, sortReviews } = props;
  const iconToUse = checked ? 'fa fa-check-circle' : 'fa fa-circle-o';
  const sortBy = (event) => {
    sortReviews(event.currentTarget.dataset.value);
  };
  return (
    <Styled checked={checked} data-value={label} onClick={sortBy}>
      <Icon checked={checked} className={iconToUse} />
      <p>{label}</p>
    </Styled>
  );
*/

describe('SortCheckbox component', () => {
  test('should render icon and paragraph', () => {
    const wrapper = shallow(
      <SortCheckbox
        label="Highest rating"
        sortReviews={mockSortReviews}
        checked
      />,
    );
    expect(wrapper.find('SortCheckbox__Container')).toHaveLength(1);
    expect(wrapper.find('SortCheckbox__Icon')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  test('should render paragraph as label', () => {
    const wrapper = shallow(
      <SortCheckbox
        label="Highest rating"
        sortReviews={mockSortReviews}
        checked
      />,
    );
    expect(wrapper.find('p').html()).toContain('Highest rating');
  });

  test('should render checked icon if checked is true', () => {
    const wrapper = shallow(
      <SortCheckbox
        label="Highest rating"
        sortReviews={mockSortReviews}
        checked
      />,
    );
    expect(wrapper.find('SortCheckbox__Icon').html()).toContain(
      'fa fa-check-circle',
    );
  });

  test('should render unchecked icon if checked is false', () => {
    const wrapper = shallow(
      <SortCheckbox
        label="Highest rating"
        sortReviews={mockSortReviews}
        checked={false}
      />,
    );
    expect(wrapper.find('SortCheckbox__Icon').html()).toContain(
      'fa fa-circle-o',
    );
  });

  test('should invoke sortReviews with the dataset value of label', () => {
    const wrapper = shallow(
      <SortCheckbox
        label="Highest rating"
        sortReviews={mockSortReviews}
        checked={false}
      />,
    );
    expect(mockSortReviews.mock.calls).toHaveLength(0);
    wrapper.find('SortCheckbox__Container').simulate('click', {
      currentTarget: { dataset: { value: 'Highest rating' } },
    });
    expect(mockSortReviews.mock.calls).toHaveLength(1);
    expect(mockSortReviews.mock.calls[0][0]).toBe('Highest rating');
  });
});
