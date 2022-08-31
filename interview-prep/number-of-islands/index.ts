function numIslands(grid: string[][]): number {
	let result = 0;
	const visited = new Set();
	const directions = [[-1,0], [0,-1], [0,1], [1,0]];

	const explore = (i: number, j: number) => {
		const rc = `${i},${j}`;

		if (visited.has(rc)) return false;
		if (i < 0 || i > grid.length - 1) return false;
		if (j < 0 || j > grid[0].length - 1) return false;

		if (grid[i][j] === '0') return false;

		visited.add(rc);

		directions.map(([row, column]) => {
			explore(i + row, j + column);
		});

		return true;
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (explore(i, j)) {
				result++;
			}
		}
	}

	return result;
}

export default numIslands;
