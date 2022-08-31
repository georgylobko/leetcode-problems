import isPalindrome from './index';

test('isPalindrome 121', () => {
	expect(isPalindrome(121)).toBe(true);
});

test('isPalindrome -121', () => {
	expect(isPalindrome(-121)).toBe(false);
});
