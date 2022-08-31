import longestPalindrome from './index';

test('longestPalindrome of babad', () => {
	expect(longestPalindrome('babad')).toBe('bab');
});

test('longestPalindrome of cbbd', () => {
	expect(longestPalindrome('cbbd')).toBe('bb');
});

test('longestPalindrome of bb', () => {
	expect(longestPalindrome('bb')).toBe('bb');
});

test('longestPalindrome of ccc', () => {
	expect(longestPalindrome('ccc')).toBe('ccc');
});

test('longestPalindrome of aaaa', () => {
	expect(longestPalindrome('aaaa')).toBe('aaaa');
});
