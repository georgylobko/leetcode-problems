import intToRoman from './index';

test('intToRoman 3', () => {
	expect(intToRoman(3)).toBe('III');
});

test('intToRoman 4', () => {
	expect(intToRoman(4)).toBe('IV');
});

test('intToRoman 8', () => {
	expect(intToRoman(8)).toBe('VIII');
});

test('intToRoman 9', () => {
	expect(intToRoman(9)).toBe('IX');
});

test('intToRoman 10', () => {
	expect(intToRoman(10)).toBe('X');
});

test('intToRoman 20', () => {
	expect(intToRoman(20)).toBe('XX');
});

test('intToRoman 58', () => {
	expect(intToRoman(58)).toBe('LVIII');
});

test('intToRoman 60', () => {
	expect(intToRoman(60)).toBe('LX');
});

test('intToRoman 200', () => {
	expect(intToRoman(200)).toBe('CC');
});

test('intToRoman 201', () => {
	expect(intToRoman(201)).toBe('CCI');
});

test('intToRoman 600', () => {
	expect(intToRoman(600)).toBe('DC');
});

test('intToRoman 1994', () => {
	expect(intToRoman(1994)).toBe('MCMXCIV');
});

test('intToRoman 2000', () => {
	expect(intToRoman(2000)).toBe('MM');
});

test('intToRoman 2001', () => {
	expect(intToRoman(2001)).toBe('MMI');
});
