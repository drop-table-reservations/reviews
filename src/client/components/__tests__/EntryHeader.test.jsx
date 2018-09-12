import React from 'react';
import { shallow, mount } from 'enzyme';
import EntryHeader from '../EntryHeader';

describe('EntryHeader component', () => {
  test('it should render without throwing an error', () => {
    expect(
      shallow(<EntryHeader />).contains(
        <div className="ratings">
          <span>Overall 5 &bull; </span>
          <span>Food 5 &bull; </span>
          <span>Service 5 &bull; </span>
          <span>Ambience 5</span>
        </div>,
      ),
    ).toBe(true);
  });

  test('it should be selectable by class "entry-head"', () => {
    expect(shallow(<EntryHeader />).is('.entry-head')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<EntryHeader />).find('.entry-head').length).toBe(1);
  });
});
