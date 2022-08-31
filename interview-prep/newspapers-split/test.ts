import newspapersSplit from './index';

describe('newspapersSplit', () => {
	it('newspapers = [7,2,5,10,8], coworkers = 2', () => {
		expect(newspapersSplit([7,2,5,10,8], 2)).toBe(18);
	});

	it('newspapers = [2,3,5,7], coworkers = 3', () => {
		expect(newspapersSplit([2,3,5,7], 7)).toBe(7);
	});
});
