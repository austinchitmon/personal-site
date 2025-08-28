import { JoinPipe } from './join.pipe';

describe('JoinPipe', () => {
  let pipe: JoinPipe;

  beforeEach(() => {
    pipe = new JoinPipe();
  });

  describe('Valid Input Tests', () => {
    it('should create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('should join string array with default separator', () => {
      const input = ['angular', 'typescript', 'pipes'];
      const result = pipe.transform(input);
      expect(result).toBe('angular, typescript, pipes');
    });

    it('should join string array with custom separator', () => {
      const input = ['apple', 'banana', 'cherry'];
      const result = pipe.transform(input, ' | ');
      expect(result).toBe('apple | banana | cherry');
    });

    it('should handle single string array', () => {
      const input = ['single'];
      const result = pipe.transform(input);
      expect(result).toBe('single');
    });

    it('should handle empty array', () => {
      const input: string[] = [];
      const result = pipe.transform(input);
      expect(result).toBe('');
    });

    it('should handle array with empty strings', () => {
      const input = ['a', '', 'b'];
      const result = pipe.transform(input);
      expect(result).toBe('a, , b');
    });

    it('should handle array with only empty string', () => {
      const input = [''];
      const result = pipe.transform(input);
      expect(result).toBe('');
    });
  });

  describe('Edge Case Tests', () => {
    it('should return null for null input', () => {
      const result = pipe.transform(null);
      expect(result).toBeNull();
    });

    it('should return null for undefined input', () => {
      const result = pipe.transform(undefined);
      expect(result).toBeNull();
    });

    it('should return null for non-array input', () => {
      const result = pipe.transform('not an array' as any);
      expect(result).toBeNull();
    });

    it('should filter out non-string values from mixed type array', () => {
      const input = ['string1', 42, 'string2', null, 'string3', undefined, true] as any[];
      const result = pipe.transform(input);
      expect(result).toBe('string1, string2, string3');
    });

    it('should return empty string for array with only non-string values', () => {
      const input = [42, null, undefined, true, {}] as any[];
      const result = pipe.transform(input);
      expect(result).toBe('');
    });
  });

  describe('Separator Tests', () => {
    it('should use default separator when not provided', () => {
      const input = ['a', 'b', 'c'];
      const result = pipe.transform(input);
      expect(result).toBe('a, b, c');
    });

    it('should handle custom separator strings', () => {
      const input = ['one', 'two', 'three'];
      const result = pipe.transform(input, ' -> ');
      expect(result).toBe('one -> two -> three');
    });

    it('should handle special character separators', () => {
      const input = ['tag1', 'tag2', 'tag3'];
      const result = pipe.transform(input, ' • ');
      expect(result).toBe('tag1 • tag2 • tag3');
    });

    it('should handle empty separator string', () => {
      const input = ['a', 'b', 'c'];
      const result = pipe.transform(input, '');
      expect(result).toBe('abc');
    });

    it('should handle newline separator', () => {
      const input = ['line1', 'line2', 'line3'];
      const result = pipe.transform(input, '\n');
      expect(result).toBe('line1\nline2\nline3');
    });

    it('should handle space-only separator', () => {
      const input = ['word1', 'word2', 'word3'];
      const result = pipe.transform(input, ' ');
      expect(result).toBe('word1 word2 word3');
    });
  });

  describe('Complex Scenarios', () => {
    it('should handle long arrays efficiently', () => {
      const input = Array.from({ length: 100 }, (_, i) => `item${i}`);
      const result = pipe.transform(input);
      expect(result).toContain('item0, item1');
      expect(result).toContain('item98, item99');
      expect(result).not.toBeNull();
      if (result) {
        expect(result.split(', ').length).toBe(100);
      }
    });

    it('should handle strings with special characters', () => {
      const input = ['hello@world', 'test#tag', 'url://example.com'];
      const result = pipe.transform(input);
      expect(result).toBe('hello@world, test#tag, url://example.com');
    });

    it('should handle Unicode characters', () => {
      const input = ['🌟', '✨', '🎉'];
      const result = pipe.transform(input);
      expect(result).toBe('🌟, ✨, 🎉');
    });

    it('should preserve whitespace in string values', () => {
      const input = [' leading', 'trailing ', ' both '];
      const result = pipe.transform(input);
      expect(result).toBe(' leading, trailing ,  both ');
    });
  });
});