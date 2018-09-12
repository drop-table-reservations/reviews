import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Summary from '../Summary';

describe('Summary component', () => {
  test('it should render without throwing an error', () => {
    expect(
      shallow(<Summary />).contains(
        <div id="summary">
          <h4>Ratings panel</h4>
          <h4>X% of people would recommend it to a friend</h4>
        </div>,
      ),
    ).toBe(true);
  });

  test('it should be selectable by id "summary"', () => {
    expect(shallow(<Summary />).is('#summary')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<Summary />).find('#summary').length).toBe(1);
  });

  test('it should render to static HTML', () => {
    expect(render(<Summary />).text()).toEqual(
      'Ratings panelX% of people would recommend it to a friend',
    );
  });
});
