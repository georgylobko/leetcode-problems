import peakOfMountainArray from './index';

describe('peakOfMountainArray', () => {
	// it('0 1 2 3 2 1 0', () => expect(peakOfMountainArray([0, 1, 2, 3, 2, 1, 0])).toBe(3));
	it('0 10 3 2 1 0', () => expect(peakOfMountainArray([0, 10, 3, 2, 1, 0])).toBe(1));
})
