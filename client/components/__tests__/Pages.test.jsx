import React from 'react';
import { shallow } from 'enzyme';
import Pages from '../Pages';

const mockFilterPage = jest.fn((targetPage) => targetPage);

describe('Pages component', () => {
  test('should render two + pageCount buttons', () => {
    const wrapper = shallow(
      <Pages pageCount={5} filterPage={mockFilterPage} activePage={2} />,
    );
    expect(wrapper.find('Pages__PageButton')).toHaveLength(7);
  });

  test('should render one page as active', () => {
    const wrapper = shallow(
      <Pages pageCount={5} filterPage={mockFilterPage} activePage={2} />,
    );
    expect(wrapper.find('[active=true]')).toHaveLength(1);
  });

  test('should invoke filterPage with the dataset value of page button', () => {
    const wrapper = shallow(
      <Pages pageCount={5} filterPage={mockFilterPage} activePage={2} />,
    );
    expect(mockFilterPage.mock.calls).toHaveLength(0);
    wrapper
      .find('[data-value=4]')
      .simulate('click', { target: { dataset: { value: 4 } } });
    expect(mockFilterPage.mock.calls).toHaveLength(1);
    expect(mockFilterPage.mock.calls[0][0]).toBe(4);
  });
});
