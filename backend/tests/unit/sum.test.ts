// Import whatever it is that you're testing
import sum from '../../src/sum';

// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';

describe('asdasdasd', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
