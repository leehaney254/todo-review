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

// Yash

describe.each([
  [2, 2],
  [1, 1],
  [0, 0],
])('Delete an item:', (a, b) => {
  test('should delete one todo task test1', () => {
    expect(deletes(a)).toHaveLength(b);
  });
});