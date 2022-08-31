import isValid from './index';

test('isValid ()', () => {
	expect(isValid('()')).toBe(true);
});

test('isValid ()[]{}', () => {
	expect(isValid('()[]{}')).toBe(true);
});

test('isValid (]', () => {
	expect(isValid('(]')).toBe(false);
});

test('isValid ([)]', () => {
	expect(isValid('([)]')).toBe(false);
});

test('isValid {[]}', () => {
	expect(isValid('{[]}')).toBe(true);
});
