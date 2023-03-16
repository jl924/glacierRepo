// import your functions here from your files
const {sum} = require('./jestTest.js');

// run a test
// manually run tests in terminal with npm run testJest
test('adds 1 + 2 and returns 3', () => {
  expect(sum(1,2)).toBe(3);
});

