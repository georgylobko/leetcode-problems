import isIsomorphic from './index';

describe('isIsomorphic', () => {
	it('s = "egg", t = "add"', () => {
		expect(isIsomorphic('egg', 'add')).toBe(true);
	});

	it('s = "foo", t = "bar"', () => {
		expect(isIsomorphic('foo', 'bar')).toBe(false);
	});

	it('s = "paper", t = "title"', () => {
		expect(isIsomorphic('paper', 'title')).toBe(true);
	});

	it('s = "badc", t = "baba"', () => {
		expect(isIsomorphic('badc', 'baba')).toBe(false);
	});
});
