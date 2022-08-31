import rle from './index';

test('rle sequence with less than 10 symbols in order', () => {
	expect(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAA')).toBe('A4B3C2XYZD4E3F3A6');
});

test('rle sequence with more than 10 symbols in order', () => {
	expect(rle('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB')).toBe('A4B3C2XYZD4E3F3A6B28');
});
