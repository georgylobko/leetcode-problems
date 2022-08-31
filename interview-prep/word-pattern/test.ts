import wordPattern from './index';

describe('wordPattern', () => {
	it('pattern = "abba", s = "dog cat cat dog"', () => {
		expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
	});

	it('pattern = "abba", s = "dog cat cat fish"', () => {
		expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
	});
})
