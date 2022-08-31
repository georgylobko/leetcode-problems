function rob(nums: number[]): number {
	if (!nums || nums.length === 0) {
		return 0;
	}

	if (nums.length === 1) {
		return nums[0];
	}

	if (nums.length === 2) {
		return Math.max(...nums);
	}

	const dp = Array(nums.length).fill(0);
	dp[0] = nums[0];
	dp[1] = Math.max(nums[0], nums[1]);

	for (let i = 2; i < dp.length; i++) {
		dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
	}

	return dp[dp.length - 1];
}

export default rob;
