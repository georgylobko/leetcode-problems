function containsDuplicate(nums: number[]): boolean {
	const obj = {};

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]]) {
			return true;
		}

		obj[nums[i]] = 1;
	}

	return false;
}

export default containsDuplicate;
