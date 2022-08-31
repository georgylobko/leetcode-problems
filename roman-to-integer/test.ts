import romanToInt from './index';

test('romanToInt 3', () => {
	expect(romanToInt('III')).toBe(3);
});

test('romanToInt 4', () => {
	expect(romanToInt('IV')).toBe(4);
});

test('romanToInt 8', () => {
	expect(romanToInt('VIII')).toBe(8);
});

test('romanToInt 9', () => {
	expect(romanToInt('IX')).toBe(9);
});

test('romanToInt 10', () => {
	expect(romanToInt('X')).toBe(10);
});

test('romanToInt 20', () => {
	expect(romanToInt('XX')).toBe(20);
});

test('romanToInt 58', () => {
	expect(romanToInt('LVIII')).toBe(58);
});

test('romanToInt 60', () => {
	expect(romanToInt('LX')).toBe(60);
});

test('romanToInt 200', () => {
	expect(romanToInt('CC')).toBe(200);
});

test('romanToInt 201', () => {
	expect(romanToInt('CCI')).toBe(201);
});

test('romanToInt 600', () => {
	expect(romanToInt('DC')).toBe(600);
});

test('romanToInt 1994', () => {
	expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('romanToInt 2000', () => {
	expect(romanToInt('MM')).toBe(2000);
});

test('romanToInt 2001', () => {
	expect(romanToInt('MMI')).toBe(2001);
});
