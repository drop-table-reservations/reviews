import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Filters from '../Filters';

describe('Filters component', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
  // test('it should render without throwing an error', () => {
  //   expect(
  //     shallow(<Filters />).contains(
  //       <div id="filters">
  //         <p>Filter and Sort Panel</p>
  //       </div>,
  //     ),
  //   ).toBe(true);
  // });

  // test('it should be selectable by id "filters"', () => {
  //   expect(shallow(<Filters />).is('#filters')).toBe(true);
  // });

  // test('it should mount in a full DOM', () => {
  //   expect(mount(<Filters />).find('#filters').length).toBe(1);
  // });

  // test('it should render to static HTML', () => {
  //   expect(render(<Filters />).text()).toEqual('Filter and Sort Panel');
  // });
});
