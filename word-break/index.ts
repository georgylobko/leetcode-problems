function wordBreak(s: string, wordDict: string[]): boolean {
	const dp = new Array(s.length).fill(false);
	dp.push(true);

	for (let i = s.length; i >= 0; i--) {
		for (let j = 0; j < wordDict.length; j++) {
			const word = wordDict[j];

			if (i + word.length <= s.length && word === s.substring(i, i + word.length)) {
				dp[i] = dp[i + word.length];
			}

			if (dp[i]) break;
		}
	}

	return dp[0];
}

export default wordBreak;
