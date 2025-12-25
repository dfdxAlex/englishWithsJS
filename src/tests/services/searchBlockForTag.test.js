import { describe, it, expect } from 'vitest';
import { searchBlockForTag } from '../../services/searchBlockForTag';

describe('searchBlockForTag', () => {

  const lines = [
    "header",
    "tag1",
    "line1",
    "line2",
    "",
    "tag2",
    "line3",
    "line4",
    ""
  ];

  it('returns block of lines after the specified tag', () => {
    const result = searchBlockForTag(lines, 'tag1');
    expect(result).toBe("line1\nline2\n");
  });

  it('stops at empty line', () => {
    const result = searchBlockForTag(lines, 'tag2');
    expect(result).toBe("line3\nline4\n");
  });

  it('returns empty string if tag not found', () => {
    const result = searchBlockForTag(lines, 'nonexistent');
    expect(result).toBe("");
  });

  it('works when tag is last line', () => {
    const result = searchBlockForTag([...lines, "tag3"], 'tag3');
    expect(result).toBe(""); // после тега пустых строк нет
  });

});
