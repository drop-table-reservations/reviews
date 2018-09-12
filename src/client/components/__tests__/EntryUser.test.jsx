import React from 'react';
import { shallow, mount, render } from 'enzyme';
import EntryUser from '../EntryUser';

describe('EntryUser component', () => {
  test('it should render without throwing an error', () => {
    expect(shallow(<EntryUser />)
      .contains(
        <div className="entry-user">
          <div className="avatar">Initials</div>
          <p>Number of reviews</p>
        </div>,
      )).toBe(true);
  });

  test('it should be selectable by class "entry-user"', () => {
    expect(shallow(<EntryUser />).is('.entry-user')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<EntryUser />).find('.entry-user').length).toBe(1);
  });

  test('it should render to static HTML', () => {
    expect(render(<EntryUser />).text()).toEqual('InitialsNumber of reviews');
  });
});
