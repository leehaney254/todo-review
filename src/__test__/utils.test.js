import { add, deletes } from '../modules/utils.js';

describe.each([
  ['Hello', 1],
  ['Bye', 2],
  ['Gooday', 3],
])('Add an item:', (a, b) => {
  test('Adding', () => {
    expect(add(a)).toHaveLength(b);
  });
});

// Yash make your changes below
