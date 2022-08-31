import findFirstOccurrence from './index';

describe('findFirstOccurrence', () => {
	it('arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100], target = 3', () => {
		expect(findFirstOccurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3)).toBe(1);
	});

	it('arr = [2, 3, 5, 7, 11, 13, 17, 19], target = 6', () => {
		expect(findFirstOccurrence([2, 3, 5, 7, 11, 13, 17, 19], 6)).toBe(-1);
	});

	it('arr = [4], target = 4', () => {
		expect(findFirstOccurrence([4], 4)).toBe(0);
	});
})
