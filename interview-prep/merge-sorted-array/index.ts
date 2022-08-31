/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	let mIndex = m - 1;
	let nIndex = n - 1;

	for (let i = m + n - 1; i >= 0; i--) {
		if (nIndex < 0) return;

		if (nums1[mIndex] > nums2[nIndex]) {
			nums1[i] = nums1[mIndex--];
		} else {
			nums1[i] = nums2[nIndex--];
		}
	}
}

export default merge;
