function numDecodings(s: string): number {
	if (s[0] === '0') return 0;
	const n = s.length;
	if (n === 1) return 1;

	const dp = new Array(n + 1).fill(0);
	dp[0] = 1;
	dp[1] = 1;

	for (let i = 2; i <= n; i++) {
		if (s[i - 1] !== '0') {
			dp[i] = dp[i - 1];
		}

		if (s[i - 2] === '1' || s[i - 2] === '2' && parseInt(s[i - 1]) < 7) {
			dp[i] += dp[i - 2];
		}
	}

	return dp[n];
}

export default numDecodings;
