import { expect, test } from 'vitest';

test('Asynchronous code accidentally passes', () => {
  setTimeout(() => {
    expect(false).toBe(true); // This assertion will run after the test has already completed
  }, 1000);
});

test('Asynchronous code has zero expectations', () => {
  expect.assertions(0); // this ensures that no assertions are expected, means the test will pass
  setTimeout(() => {
    expect(false).toBe(true);
  }, 1000);
});

test.fails('Code inside of callback never runs', () => {
  expect.hasAssertions(); // expects at least one assertion to be called
  setTimeout(() => {
    expect(false).toBe(true); // This assertion will run after the test has already completed
  }, 1000);
});
