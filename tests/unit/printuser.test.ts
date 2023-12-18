// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';

// Import whatever it is that you're testing
import printuser from '../../src/printuser';
import { IPERSON } from 'src/interfaces/TEAM_A';

describe('Some description for test cases', () => {
  test('adds 1 + 2 to equal 3', () => {
    const user: IPERSON = {
      name: 'Majd',
      age: 40,
    };

    expect(printuser(user)).toBe(true);

    // must declare type
    //printuser(10);
  });
});
