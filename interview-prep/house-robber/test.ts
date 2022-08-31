import rob from './index';

describe('rob', () => {
	it('rob [1,2,3,1]', () => {
		expect(rob([1,2,3,1])).toBe(4);
	});

	it('rob [2,7,9,3,1]', () => {
		expect(rob([2,7,9,3,1])).toBe(12);
	});

	it('rob [2,7,9,15,3,1]', () => {
		expect(rob([2,7,9,15,3,1])).toBe(23);
	});

	it('rob [1,2]', () => {
		expect(rob([1,2])).toBe(2);
	});

	it('rob [1,20,2]', () => {
		expect(rob([1,20,2])).toBe(20);
	});

	it('rob [0]', () => {
		expect(rob([0])).toBe(0);
	});
});
