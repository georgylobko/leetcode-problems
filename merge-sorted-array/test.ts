import merge from './index';

// test('merge nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3', () => {
// 	const nums1 = [1,2,3,0,0,0];
// 	merge(nums1, 3, [2,5,6], 3)
// 	expect(nums1).toStrictEqual([1,2,2,3,5,6]);
// });
//
// test('merge nums1 = [1], m = 1, nums2 = [], n = 0', () => {
// 	const nums1 = [1];
// 	merge(nums1, 1, [], 0);
// 	expect(nums1).toStrictEqual([1]);
// });
//
// test('merge nums1 = [1,0], m = 1, nums2 = [2], n = 1', () => {
// 	const nums1 = [1,0];
// 	merge(nums1, 1, [2], 1);
// 	expect(nums1).toStrictEqual([1, 2]);
// });

test('merge nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3', () => {
	const nums1 = [4,5,6,0,0,0];
	merge(nums1, 3, [1,2,3], 3);
	expect(nums1).toStrictEqual([1,2,3,4,5,6]);
});
