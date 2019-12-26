const helloWorld = require('./index');

it('says "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});
