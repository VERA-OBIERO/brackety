const isBalanced = require('./bracket');

test('Balanced brackets should return true', () => {
  expect(isBalanced("[()]{}{[()()]()}")).toBe(true);
  expect(isBalanced("([{}])")).toBe(true);
});

test('Unbalanced brackets should return false', () => {
  expect(isBalanced("{(})[]")).toBe(false);
  expect(isBalanced("[(])")).toBe(false);
  expect(isBalanced("[()")).toBe(false);
});

test('Empty string should return true', () => {
  expect(isBalanced("")).toBe(true);
});

test('String with no brackets should return true', () => {
  expect(isBalanced("abcdefg")).toBe(true);
});

