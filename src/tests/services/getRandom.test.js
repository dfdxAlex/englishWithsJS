import { describe, it, expect } from 'vitest';
import { getRandom } from '../../services/getRandom.js';

describe('getRandom', () => {

  it('return randome One', () => {
    const result = getRandom(0, 10);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('return randome Two', () => {
    const result = getRandom(10, 100);
    expect(result).toBeGreaterThanOrEqual(10);
    expect(result).toBeLessThanOrEqual(100);
  });

});
