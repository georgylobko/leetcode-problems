function permute(nums: number[]): number[] | number[][] {
	if (nums.length === 1) {
		return [nums];
	}

	const result = [];

	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		const remainingChars = nums.filter((item, idx) => idx !== i);

		for (const permutation of permute(remainingChars)) {
			if (typeof permutation === 'number') {
				result.push([current, permutation]);
			} else {
				result.push([current, ...permutation]);
			}
		}
	}

	return result;
}

export default permute;
