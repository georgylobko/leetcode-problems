/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
	const swap = (l: number, r: number) => {
		const temp = nums[l];
		nums[l] = nums[r];
		nums[r] = temp;
	}

	let twoI = nums.length - 1;
	let zeroI = 0;

	for (let i = 0; i <= twoI; i++) {
		if (nums[i] === 0) {
			swap(i, zeroI);
			zeroI++;
		} else if (nums[i] === 2) {
			swap(i, twoI);
			twoI--;
			i--;
		}
	}
}

export default sortColors;
