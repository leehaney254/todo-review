import { add, deletes } from '../__mocks__/utils.js';

describe.each([
  ['Hello', 1],
  ['Bye', 2],
  ['Gooday', 3],
])('Add an item:', (a, b) => {
  test('Adding', () => {
    expect(add(a)).toHaveLength(b);
  });
});

describe.each([
  [2, 2],
  [1, 1],
  [0, 0],
])('Delete an item:', (a, b) => {
  test('should delete one todo task test1', () => {
    expect(deletes(a)).toHaveLength(b);
  });
});