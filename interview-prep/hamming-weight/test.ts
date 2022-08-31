import hammingWeight from './index';

test('hammingWeight', () => {
	expect(hammingWeight(0o0000000000000000000000000001011)).toBe(3);
})
