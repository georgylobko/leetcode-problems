import moveZeroes from './index';

// test('moveZeroes [0,1,0,3,12]', () => {
// 	const array = [0,1,0,3,12];
// 	const result = [1,3,12,0,0];
//
// 	moveZeroes(array);
//
// 	expect(array).toStrictEqual(result);
// });
//
// test('moveZeroes [0,1,0]', () => {
// 	const array = [0,1,0];
// 	const result = [1,0,0];
//
// 	moveZeroes(array);
//
// 	expect(array).toStrictEqual(result);
// });

test('moveZeroes [0,0,1]', () => {
	const array = [0,0,1];
	const result = [1,0,0];

	moveZeroes(array);

	expect(array).toStrictEqual(result);
});
