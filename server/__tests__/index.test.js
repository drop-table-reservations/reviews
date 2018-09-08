const testFunction = require('../index');

test('testFunction returns the input its given', () => {
  expect(testFunction('hello CircleCI')).toBe('hello CircleCI');
});

test('testFunction returns the input its given again', () => {
  expect(testFunction('hello CircleCI2')).toBe('hello CircleCI2');
});
