import numIslands from './index';

test('numIslands', () => {
	const grid = [
		["1","1","0","0","0"],
		["1","1","0","0","0"],
		["0","0","1","0","0"],
		["0","0","0","1","1"]
	];

	expect(numIslands(grid)).toBe(3);
})
