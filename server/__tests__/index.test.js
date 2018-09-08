const testFunction = require('../index');

test('testFunction returns the input its given', () => {
  expect(testFunction('hello CircleCI')).toBe('hello CircleCI');
});
