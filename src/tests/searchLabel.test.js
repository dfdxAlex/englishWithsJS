import { describe, it, expect } from 'vitest';
import { searchLabel } from '../services/searchLabel';

describe('searchLabel', () => {
  it('finds the position of a label in a string', () => {
    const str = `
      help
      noonMenu
      searchLabel
    `;
    expect(searchLabel(str, 'noonMenu')).toBe(str.indexOf('noonMenu'));
  });

  it('is case insensitive', () => {
    const str = `
      help
      noonMenu
      searchLabel
    `;
    expect(searchLabel(str, 'NoonMenu')).toBe(str.indexOf('noonMenu'));
  });

  it('returns -1 if label is not found', () => {
    const str = `
      help
      noonMenu
      searchLabel
    `;
    expect(searchLabel(str, 'randomLabel')).toBe(-1);
  });

  it('returns -1 for empty string', () => {
    expect(searchLabel('', 'noonMenu')).toBe(-1);
  });
});
