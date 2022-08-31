function searchInsert(nums: number[], target: number): number {
	let result = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) {
			return i;
		}

		if (i === 0 && nums[i] > target) {
			return 0;
		}

		if (nums[i] > target && nums[i - 1] < target) {
			return i;
		}

		if (i === nums.length - 1 && nums[i] < target) {
			return i + 1;
		}
	}

	return result;
}

export default searchInsert;
