import hammingDistance from './index';

describe('hammingDistance', () => {
	it('x = 1, y = 4', () => expect(hammingDistance(1, 4)).toBe(2));
	it('x = 3, y = 1', () => expect(hammingDistance(3, 1)).toBe(1));
});
