import zeroSumSubsequence from './index';

test('zeroSumSubsequence [3, 8, -9, 1, 8]', () => {
	expect(zeroSumSubsequence([3, 8, -9, 1, 8])).toBe(true);
});

test('zeroSumSubsequence [2, 1, 3, 4, -9, 6, 8, 9, -100000, 123132131]', () => {
	expect(zeroSumSubsequence([2, 1, 3, 4, -9, 6, 8, 9, -100000, 123132131])).toBe(false);
});

test('zeroSumSubsequence [2, 1, 3, 4, -9, 6, 8, 9, -100000, 123132131]', () => {
	expect(zeroSumSubsequence([3, 4, -7, 3, 1, 3, 1, -4, -2, -2])).toBe(true);
});
