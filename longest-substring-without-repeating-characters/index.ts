function lengthOfLongestSubstring(str: string): number {
	let i = 0;
	const charsMap = {};
	let result = 0;

	str.split('').forEach((char, j) => {
		if (charsMap[char]) {
			i = Math.max(charsMap[char], i);
		}

		result = Math.max(result, j - i + 1);
		charsMap[char] = j + 1;
	});

	return result;
}

export default lengthOfLongestSubstring;
