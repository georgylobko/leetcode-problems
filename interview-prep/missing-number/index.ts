function missingNumber(nums: number[]): number {
	const set = new Set(nums);

	for (let i = 0; i < nums.length + 1; i++) {
		if (!set.has(i)) {
			return i;
		}
	}
}

export default missingNumber;
