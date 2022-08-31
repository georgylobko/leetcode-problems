import countAndSay from './index';

test('countAndSay 1', () => {
	expect(countAndSay(1)).toBe('1');
});

test('countAndSay 4', () => {
	expect(countAndSay(4)).toBe('1211');
});

test('countAndSay 5', () => {
	expect(countAndSay(5)).toBe('111221');
});
