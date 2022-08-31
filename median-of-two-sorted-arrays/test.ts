import findMedianSortedArrays from './index';

test('findMedianSortedArrays', () => {
	expect(findMedianSortedArrays([1,3], [2])).toBe(2);
});

test('findMedianSortedArrays', () => {
	expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
});
