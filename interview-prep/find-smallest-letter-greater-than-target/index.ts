function nextGreatestLetter(letters: string[], target: string): string {
	const charCodes = letters.map((letter: string) => letter.charCodeAt(0));
	const targetCharCode = target.charCodeAt(0);

	let left = 0;
	let right = charCodes.length;

	while (left < right) {
		const mid = left + Math.floor((right - left) / 2);
		if (charCodes[mid] <= targetCharCode) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	return letters[left % letters.length];
}

export default nextGreatestLetter;
