function rotate(matrix: number[][]): void {
	const n = matrix.length;

	for (let i = 0; i < Math.ceil(n / 2); i++) {
		for (let j = 0; j < Math.floor(n / 2); j++) {
			const temp = matrix[n - 1 - i][j];
			matrix[n - 1 - i][j] = matrix[n - 1 - j][n - 1 - i];
			matrix[n - 1 - j][n - 1 - i] = matrix[i][n - 1 - j];
			matrix[i][n - 1 - j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}
}

export default rotate;
