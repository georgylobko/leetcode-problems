function threeSumClosest(nums: number[], target: number): number {
	nums.sort((a, b) => a - b);
	let closest = Infinity;
	let sum;

	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] === nums[i - 1]) continue;
		let lo = i + 1;
		let hi = nums.length - 1;

		while (lo < hi) {
			sum = nums[i] + nums[lo] + nums[hi];
			closest = Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest;

			if (closest === target) {
				return sum;
			}

			if (sum > target) {
				hi--;
			} else {
				lo++;
			}
		}
	}

	return closest;
}

export default threeSumClosest;
