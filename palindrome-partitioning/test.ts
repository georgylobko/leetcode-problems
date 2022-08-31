import partition, { isPalindrome } from './index';

// describe('isPalindrome', () => {
// 	it('abba', () => {
// 		expect(isPalindrome('abba', 0, 3)).toBe(true);
// 	});
//
// 	it('some', () => {
// 		expect(isPalindrome('some', 0, 3)).toBe(false);
// 	});
// });

describe('partition', () => {
	it('aab', () => {
		expect(partition('aab')).toStrictEqual([["a","a","b"],["aa","b"]]);
	});

	it('cdd', () => {
		expect(partition('cdd')).toStrictEqual([["c","d","d"],["c","dd"]]);
	});

	it('a', () => {
		expect(partition('a')).toStrictEqual([["a"]]);
	});
});
