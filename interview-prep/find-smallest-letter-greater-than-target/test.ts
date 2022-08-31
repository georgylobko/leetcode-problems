import nextGreatestLetter from './index';

describe('nextGreatestLetter', () => {
	it('letters = ["c","f","j"], target = "a"', () => {
		expect(nextGreatestLetter(["c","f","j"], 'a')).toBe('c');
	});

	it('letters = ["c","f","j"], target = "c"', () => {
		expect(nextGreatestLetter(["c","f","j"], 'c')).toBe('f');
	});

	it('letters = ["c","f","j"], target = "d"', () => {
		expect(nextGreatestLetter(["c","f","j"], 'd')).toBe('f');
	});

	it('letters = ["c","f","j"], target = "g"', () => {
		expect(nextGreatestLetter(["c","f","j"], 'g')).toBe('j');
	});

	it('letters = ["c","f","j"], target = "g"', () => {
		expect(nextGreatestLetter(["c","f","j"], 'j')).toBe('c');
	});
})
