function generate(numRows: number): number[][] {
	if (numRows === 1) {
		return [[1]];
	}

	const two = [[1],[1,1]];

	if (numRows === 2) {
		return two;
	}

	const result = two;

	const generateRow = (input: number[]): number[] => {
		const result = [];
		for (let i = 0; i < input.length; i++) {
			if (i === 0 || i === input.length - 1) {
				result.push(input[i])
			}

			if (i !== input.length - 1) {
				result.push(input[i] + input[i+1]);
			}
		}

		return result;
	}

	for (let i = 3; i <= numRows; i++) {
		const last = result[result.length - 1];
		result.push(generateRow(last));
	}

	return result;
}

export default generate;
