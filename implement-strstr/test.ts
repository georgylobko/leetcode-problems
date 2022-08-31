import strStr from './index';

test('strStr hello', () => {
	expect(strStr('hello', 'll')).toBe(2);
});

test('strStr mississippi', () => {
	expect(strStr('mississippi', 'issip')).toBe(4);
});

test('strStr aaaaa', () => {
	expect(strStr('aaaaa', 'bba')).toBe(-1);
});

test('strStr ', () => {
	expect(strStr('', '')).toBe(0);
});

test('strStr ', () => {
	expect(strStr('', 'a')).toBe(-1);
});

test('strStr ', () => {
	expect(strStr('a', '')).toBe(0);
});

test('strStr ', () => {
	expect(strStr('aaa', 'aaaa')).toBe(-1);
});
