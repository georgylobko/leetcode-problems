function lengthOfLastWord(s: string): number {
	const array = s.split(' ');

	if (array.some((word) => Boolean(word.length)) && !array[array.length - 1].length) {
		while (!array[array.length - 1].length) {
			array.pop();
		}
	}

	return array[array.length - 1].length;
}

export default lengthOfLastWord;
