import lengthOfLastWord from './index';

test('lengthOfLastWord Hello World', () => {
	expect(lengthOfLastWord('Hello World')).toBe(5);
});

test('lengthOfLastWord ', () => {
	expect(lengthOfLastWord(' ')).toBe(0);
});

test('lengthOfLastWord "a "', () => {
	expect(lengthOfLastWord('a ')).toBe(1);
});
