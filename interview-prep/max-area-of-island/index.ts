function maxAreaOfIsland(grid: number[][]): number {
	let maxArea = 0;
	const rows = grid.length;
	const columns = grid[0].length;

	const visited = new Set();
	const directions = [[-1, 0], [0, -1], [0, 1], [1, 0]];

	const getArea = (i: number, j: number): number => {
		const rc = `${i},${j}`;

		if (visited.has(rc)) return 0;
		if (i < 0 || i > rows - 1) return 0;
		if (j < 0 || j > columns - 1) return 0;
		if (grid[i][j] === 0) return 0;

		visited.add(rc);

		return directions.reduce((acc, [row, column]) => {
			return acc + getArea(i + row, j + column);
		}, 1);
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			maxArea = Math.max(maxArea, getArea(i, j));
		}
	}

	return maxArea;
}

export default maxAreaOfIsland;
