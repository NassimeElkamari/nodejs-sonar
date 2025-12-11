const { addNumbers } = require('./index');

describe('addNumbers', () => {
  test('adds positive numbers', () => {
    expect(addNumbers(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(addNumbers(-2, -3)).toBe(-5);
  });

  test('adds positive and negative numbers', () => {
    expect(addNumbers(5, -3)).toBe(2);
  });

  test('adds zeros', () => {
    expect(addNumbers(0, 0)).toBe(0);
  });
});
