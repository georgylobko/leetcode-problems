import reverse from './index';

test('reverse 123', () => {
	expect(reverse(123)).toBe(321);
});

test('reverse -123', () => {
	expect(reverse(-123)).toBe(-321);
});

test('reverse 120', () => {
	expect(reverse(120)).toBe(21);
});

test('reverse 0', () => {
	expect(reverse(0)).toBe(0);
});
