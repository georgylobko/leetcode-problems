import reverseBits, { reverseString } from './index';

describe('reverseString', () => {
	it('qwerty', () => expect(reverseString('qwerty')).toBe('ytrewq'));
	it('Maria', () => expect(reverseString('Maria')).toBe('airaM'));
});

describe('reverseBits', () => {
	it('00000010100101000001111010011100', () => {
		expect(reverseBits(43261596)).toBe(964176192);
	})
})
