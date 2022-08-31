import myAtoi from './index';

test('myAtoi 42', () => {
	expect(myAtoi('42')).toBe(42);
});

test('myAtoi    -42', () => {
	expect(myAtoi('   -42')).toBe(-42);
});

test('myAtoi 4193 with words', () => {
	expect(myAtoi('4193 with words')).toBe(4193);
});

test('myAtoi -2147483649 with words', () => {
	expect(myAtoi('-2147483649 with words')).toBe(-2147483648);
});

test('myAtoi 2147483648 with words', () => {
	expect(myAtoi('2147483648 with words')).toBe(2147483647);
});

test('myAtoi words and 987', () => {
	expect(myAtoi('words and 987')).toBe(0);
});

test('myAtoi 0032', () => {
	expect(myAtoi('0032')).toBe(32);
});

test('myAtoi 3.14159', () => {
	expect(myAtoi('3.14159')).toBe(3);
});
