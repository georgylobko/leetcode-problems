import compareStrings from './index';

test('compareStrings yf#c# and yy#k#pp##', () => {
	expect(compareStrings('yf#c#', 'yy#k#pp##')).toBe(1);
});

test('compareStrings axbd#c#c and axx#bb#c', () => {
	expect(compareStrings('axbd#c#c', 'axx#bb#c')).toBe(1);
});
