import { mockAdd, mockDeletes, mockEditElement } from '../modules/utils.js';

describe.each([
  ['Hello', 1],
  ['Bye', 2],
  ['Gooday', 3],
])('Add an item:', (a, b) => {
  test('Adding', () => {
    expect(mockAdd(a)).toHaveLength(b);
  });
});

// Yash make your changes below
describe.each([
  [2, 2],
  [1, 1],
  [0, 0],
])('Delete an item:', (a, b) => {
  test('should delete one todo task test1', () => {
    expect(mockDeletes(a)).toHaveLength(b);
  });
});

describe.each([
  ['See', 0],
  ['you', 1],
  ['then', 2],
])('Edit an item:', (a, b) => {
  test('should edit one todo task test1', () => {
    expect(mockEditElement(a)).toHaveLength(b);
  });
});

describe.each([
  [2, 2],
  [1, 1],
  [0, 0],
])('Delete an item:', (a, b) => {
  test('should delete one todo task test1', () => {
    expect(mockDeletes(a)).toHaveLength(b);
  });
});

describe.each([
  [{ index: 0, description: 'Hi', completed: false }, 1],
  [{ index: 1, description: 'Bye', completed: true }, 0],
  [{ index: 2, description: 'Today', completed: false }, 1],
  [{ index: 3, description: 'tommorrow', completed: false }, 1],
  [{ index: 4, description: 'Last', completed: true }, 0],
])('Clear all completed items:', (a, b) => {
  test('should clear all completed', () => {
    expect(mockClearComplete(a)).toHaveLength(b);
  });
});
