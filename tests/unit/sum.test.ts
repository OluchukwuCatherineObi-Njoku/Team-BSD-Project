// Must import jest functions every time you want to use them
import { expect, test, describe } from '@jest/globals';

// Import whatever it is that you're testing
import sum from '../../src/sum';
import getname from '../../src/getname';
import { IPERSON } from 'src/interfaces/TEAM_A';

describe('Some description for test cases', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('get name from IPERSON', () => {
    const the_person: IPERSON = {
      name: 'Majd',
      age: 27,
    };

    expect(getname(the_person)).toBe('Majd');
  });
});
