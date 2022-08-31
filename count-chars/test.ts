import countChars from './index';

test('strStr Hello world', () => {
	expect(countChars('Hello world, my name is Georgy, \'m 28 years old')).toBe(2);
});
