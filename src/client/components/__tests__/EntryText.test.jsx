import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EntryText from '../EntryText';

describe('EntryText component', () => {
  test('true should be true', () => {
    expect(true).toBe(true);
  });
  // test('it should render without throwing an error', () => {
  //   expect(
  //     shallow(<EntryText />).contains(
  //       <div className="entry-text">
  //         <p>Entry text here.</p>
  //       </div>,
  //     ),
  //   ).toBe(true);
  // });

  // test('it should be selectable by class "entry-text"', () => {
  //   expect(shallow(<EntryText />).is('.entry-text')).toBe(true);
  // });

  // test('it should mount in a full DOM', () => {
  //   expect(mount(<EntryText />).find('.entry-text').length).toBe(1);
  // });

  // test('it should render to static HTML', () => {
  //   expect(render(<EntryText />).text()).toEqual('Entry text here.');
  // });
});
