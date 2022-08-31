function climbStairs(n: number): number {
	const ans = [];
	ans[0] = 1;
	ans[1] = 1;

	for (let i = 2; i <= n; i++) {
		ans[i] = ans[i - 1] + ans[i - 2];
	}

	return ans[n];
}

export default climbStairs;
