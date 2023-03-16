const {sum} = require('./jestTest.js');
console.log(sum);

test('adds 1 + 2 and returns 3', () => {
  expect(sum(1,2)).toBe(3);
});

// test
