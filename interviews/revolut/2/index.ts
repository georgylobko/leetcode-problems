function findCoordinates(matrix: string[][], element: string): number[] {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === element) {
				return [i, j];
			}
		}
	}
}

function findPathLength(matrix: string[][], a: string, b: string) {
	const start = findCoordinates(matrix, a);
	const end = findCoordinates(matrix, b);

	const queue = [start];
	let steps = 0;

	while (queue.length) {
		const current = queue.shift();
		const xDiff = end[0] - current[0];
		const yDiff = end[1] - current[1];

		if (xDiff === 0 && yDiff === 0) {
			break;
		}

		steps++;

		let x = current[0];
		let y = current[1];

		if (Math.abs(xDiff) >= 1) {
			const sign = xDiff > 0 ? 1 : -1;
			x = x + 1 * sign;
		}

		if (Math.abs(yDiff) >= 1) {
			const sign = yDiff > 0 ? 1 : -1;
			y = y + 1 * sign;
		}

		queue.push([x, y]);
	}

	return steps;
}

function entryTime(s: string, keypad: string): number {
	let result = 0;
	const matrix =  [[], [], []];
	keypad.split('').forEach((char, i) => {
		if (i <= 2) {
			matrix[0].push(char);
		} else if (i <= 5) {
			matrix[1].push(char);
		} else {
			matrix[2].push(char);
		}
	});

	for (let i = 0; i < s.length; i++) {
		if (i !== 0) {
			result += findPathLength(matrix, s[i - 1], s[i]);
		}
	}

	return result;
}

export default entryTime;
