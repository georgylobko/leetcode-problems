function letterCombinations(digits: string): string[] {
	let result = [];

	if (!digits) {
		return result;
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

	const lettersArrays: Array<Array<string>> = digits.split('').map((digit: string) => matches[digit]);
	result = lettersArrays[0];

	const buildCombination = (result: Array<string>, source: Array<string>): Array<string> => {
		const res = [];

		for (let i = 0; i < result.length; i++) {
			for (let j = 0; j < source.length; j++) {
				res.push(result[i] + source[j]);
			}
		}

		return res;
	}

	lettersArrays.slice(1).forEach((array) => {
		result = buildCombination(result, array);
	});

	return result;
}

export default letterCombinations;
