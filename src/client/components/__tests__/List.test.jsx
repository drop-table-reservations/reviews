import React from 'react';
import { shallow, mount } from 'enzyme';
import List from '../List';

describe('List component', () => {

  test('it should be selectable by id "lis"', () => {
    expect(shallow(<List />).is('#list')).toBe(true);
  });

  test('it should mount in a full DOM', () => {
    expect(mount(<List />).find('#list').length).toBe(1);
  });
});
