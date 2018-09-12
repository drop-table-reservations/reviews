import React from 'react';
import { shallow, mount } from 'enzyme';
import Entry from '../Entry';

describe('Entry component', () => {
  test('it should be selectable by class "entry"', () => {
    expect(shallow(<Entry />).is('.entry')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<Entry />).find('.entry').length).toBe(1);
  });
});
