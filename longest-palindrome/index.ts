function expandAroundCenter(str: string, left: number, right: number): number {
	while (left >= 0 && right <= str.length && str[left] === str[right]) {
		left--;
		right++;
	}

	return right - left - 1;
}

function longestPalindrome(str: string): string {
	let start = 0;
	let end = 0;

	str.split('').forEach((char, index) => {
		const length1 = expandAroundCenter(str, index, index);
		const length2 = expandAroundCenter(str, index, index + 1);
		const length = Math.max(length1, length2);
		if (length > end - start) {
			const isEven = length1 < length2;
			start = isEven ? (index + 1) - (length / 2) : index - Math.round((length - 1) / 2);
			end = isEven ? (index + 1) + (length / 2) : index + Math.round(length / 2);
		}
	});

	return str.slice(start, end);
}

export default longestPalindrome;
