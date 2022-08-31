import addBinary from './index';

test('addBinary 11 and 1', () => {
	expect(addBinary('11', '1')).toBe('100');
});

test('addBinary 1010 and 1011', () => {
	expect(addBinary('1010', '1011')).toBe('10101');
});

test('addBinary 1 and 1', () => {
	expect(addBinary('1', '1')).toBe('10');
});

test('addBinary 1 and 111', () => {
	expect(addBinary('1', '111')).toBe('1000');
});

test('addBinary 1111 and 1', () => {
	expect(addBinary('1111', '1')).toBe('10000');
});

test('addBinary 1111 and 1110', () => {
	expect(addBinary('1111', '1110')).toBe('11101');
});

test('addBinary 101111 and 10', () => {
	expect(addBinary('101111', '10')).toBe('110001');
});

test('addBinary 110010 and 10111', () => {
	expect(addBinary('110010', '10111')).toBe('1001001');
});
