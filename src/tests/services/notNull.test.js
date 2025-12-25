import { describe, it, expect } from 'vitest';
import { notNull } from '../../services/notNull.js';

describe('notNull', () => {
  it('returns value if it is not null', () => {
    expect(notNull(5)).toBe(5);
  });

  it('returns start value if arg is null', () => {
    expect(notNull(null, 10)).toBe(10);
  });

  it('returns start value if arg is undefined', () => {
    expect(notNull(undefined, 15)).toBe(15);
  });

  it('returns start value if arg is NaN', () => {
    expect(notNull(NaN, 25)).toBe(25);
  });

});
