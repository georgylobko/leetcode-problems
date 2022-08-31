import isPalindrome from './index';

test('firstUniqChar A man, a plan, a canal: Panama', () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('firstUniqChar ab_a', () => {
	expect(isPalindrome('ab_a')).toBe(true);
});
