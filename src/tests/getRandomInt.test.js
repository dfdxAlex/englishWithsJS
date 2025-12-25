import { describe, it, expect } from 'vitest';
import { getRandomInt } from '../services/getRandomInt.js';

describe('getRandomInt', () => {

  it('return randome One', () => {
    const result = getRandomInt(-7.04, 10.1);
    expect(result).toBeGreaterThanOrEqual(-7);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('return randome Two', () => {
    const result = getRandomInt(9.0001, 100.99999);
    expect(result).toBeGreaterThanOrEqual(10);
    expect(result).toBeLessThanOrEqual(100);
  });

});
