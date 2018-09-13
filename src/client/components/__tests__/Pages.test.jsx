import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Pages from '../Pages';

describe('Pages component', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
  // test('it should render without throwing an error', () => {
  //   expect(
  //     shallow(<Pages />).contains(
  //       <div id="pages">
  //         <button type="submit">Page 1</button>
  //         <button type="submit">Page N</button>
  //       </div>,
  //     ),
  //   ).toBe(true);
  // });

  // test('it should be selectable by id "pages"', () => {
  //   expect(shallow(<Pages />).is('#pages')).toBe(true);
  // });

  // test('it should mount in a full DOM', () => {
  //   expect(mount(<Pages />).find('#pages').length).toBe(1);
  // });

  // test('it should render to static HTML', () => {
  //   expect(render(<Pages />).text()).toEqual('Page 1Page N');
  // });
});
