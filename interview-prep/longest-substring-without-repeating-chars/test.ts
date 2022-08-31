import lengthOfLongestSubstring from './index';

test('lengthOfLongestSubstring abcabcbb', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
});

test('lengthOfLongestSubstring bbbbb', () => {
	expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
});

test('lengthOfLongestSubstring pwwkew', () => {
	expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
