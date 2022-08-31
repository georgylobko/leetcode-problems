function maxSubArray(nums: number[]): number {
	if (nums.length === 1) {
		return nums[0];
	}

	let result = -Infinity;
	let temp = 0;

	for (let i = 0; i < nums.length; i++) {
		temp = nums[i] + temp;
		if (temp < nums[i]) {
			temp = nums[i];
		}

		result = Math.max(result, temp);
	}

	return result;
}

export default maxSubArray;
