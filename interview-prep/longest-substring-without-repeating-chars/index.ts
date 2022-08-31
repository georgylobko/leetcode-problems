function lengthOfLongestSubstring(str: string): number {
	let length = 0;
	const map = {};
	let i = 0;

	str.split('').forEach((char, j) => {
		if (map[char]) {
			i = Math.max(map[char], i);
		}

		map[char] = j + 1;
		length = Math.max(length, j - i + 1);
	});

	return length;
}

export default lengthOfLongestSubstring;
