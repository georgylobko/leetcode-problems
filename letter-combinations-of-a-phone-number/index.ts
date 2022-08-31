function letterCombinations(digits: string): string[] {
	if (!digits) {
		return [];
	}

	const matches = {
		2: ['a', 'b', 'c'],
		3: ['d', 'e', 'f'],
		4: ['g', 'h', 'i'],
		5: ['j', 'k', 'l'],
		6: ['m', 'n', 'o'],
		7: ['p', 'q', 'r', 's'],
		8: ['t', 'u', 'v'],
		9: ['w', 'x', 'y', 'z']
	};

	if (digits.length === 1) {
		return matches[digits];
	}

	const lettersArrays: string[][] = digits.split('').map((digit) => matches[digit]);
	let result = lettersArrays[0];

	const buildCombination = (base: string[], remaining: string[]) => {
		let result = [];
		base.forEach((currentLetter: string) => {
			result = [...result, ...remaining.map((letter: string) => `${currentLetter}${letter}`)];
		});

		return result;
	}

	lettersArrays.slice(1).forEach((lettersArray: string[]) => {
		result = buildCombination(result, lettersArray);
	});

	return result;
}

export default letterCombinations;
