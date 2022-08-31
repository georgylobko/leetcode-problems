function expandAroundCenter(str: string, start: number, end: number) {
	while (start >= 0 && end <= str.length && str[start] === str[end]) {
		start--;
		end++;
	}

	return end - start - 1;
}

function longestPalindrome(str: string): string {
	let start = 0;
	let end = 0;

	str.split('').forEach((char, index) => {
		const length1 = expandAroundCenter(str, index, index);
		const length2 = expandAroundCenter(str, index, index + 1);
		const length = Math.max(length1, length2);
		if (length > end - start) {
			const isOdd = length1 > length2;
			if (isOdd) {
				start = index - Math.round((length - 1) / 2);
				end = index + Math.round(length / 2);
			} else {
				start = (index + 1) - (length / 2);
				end = (index + 1) + (length / 2);
			}
		}
	});

	return str.slice(start, end);
}

export default longestPalindrome;
