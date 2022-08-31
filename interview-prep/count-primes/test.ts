import countPrimes from './index';

describe('countPrimes', () => {
	it('10', () => expect(countPrimes(10)).toBe(4));
	it('7', () => expect(countPrimes(7)).toBe(3));
	it('1', () => expect(countPrimes(1)).toBe(0));
	it('5000000', () => expect(countPrimes(5000000)).toBe(348513));
});
