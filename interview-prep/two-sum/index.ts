function twoSum(nums: number[], target: number): number[] {
	let differences = {};

	for (let i = 0; i < nums.length; i++) {
		if (target - nums[i] in differences) {
			return [differences[target - nums[i]], i];
		} else {
			differences[nums[i]] = i;
		}
	}
}

export default twoSum;
