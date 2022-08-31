import isPowerOfThree from './index';

describe('isPowerOfThree', () => {
	it('27', () => expect(isPowerOfThree(27)).toBe(true));
	it('10', () => expect(isPowerOfThree(10)).toBe(false));
	it('9', () => expect(isPowerOfThree(9)).toBe(true));
	it('1', () => expect(isPowerOfThree(1)).toBe(true));
})
