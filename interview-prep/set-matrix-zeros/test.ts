import setZeroes from './index';

// test('setZeroes', () => {
// 	const input = [[1,1,1],[1,0,1],[1,1,1]];
// 	const output = [[1,0,1],[0,0,0],[1,0,1]];
//
// 	setZeroes(input);
//
// 	expect(input).toStrictEqual(output);
// });
//
// test('setZeroes', () => {
// 	const input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
// 	const output = [[0,0,0,0],[0,4,5,0],[0,3,1,0]];
//
// 	setZeroes(input);
//
// 	expect(input).toStrictEqual(output);
// });

test('setZeroes', () => {
	const input = [[1,2,3,4],[5,0,7,8],[0,10,11,12],[13,14,15,0]];
	const output = [[0,0,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

	setZeroes(input);

	expect(input).toStrictEqual(output);
});
