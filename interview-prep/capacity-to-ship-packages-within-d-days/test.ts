import shipWithinDays from './index';

describe('shipWithinDays', () => {
	it('[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 5', () => {
		expect(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(15);
	});

	it('[3, 2, 2, 4, 1, 4] 3', () => {
		expect(shipWithinDays([3, 2, 2, 4, 1, 4], 3)).toBe(6);
	});

	it('[1, 2, 3, 1, 1] 4', () => {
		expect(shipWithinDays([1, 2, 3, 1, 1], 4)).toBe(3);
	});

	it('[5, 5, 5, 5, 5, 5, 5, 5, 5] 5', () => {
		expect(shipWithinDays([5, 5, 5, 5, 5, 5, 5, 5, 5], 5)).toBe(10);
	});

	it('[5, 7, 6, 6, 3, 4, 5, 2, 3, 3, 4, 1, 9, 2] 5', () => {
		expect(shipWithinDays([5, 7, 6, 6, 3, 4, 5, 2, 3, 3, 4, 1, 9, 2], 5)).toBe(12);
	});

	it('[499, 377, 288, 96, 297, 107] 6', () => {
		expect(shipWithinDays([499, 377, 288, 96, 297, 107], 6)).toBe(499);
	});

	it('[8, 66, 143, 55, 233, 76, 101] 1', () => {
		expect(shipWithinDays([8, 66, 143, 55, 233, 76, 101], 1)).toBe(682);
	});
});
