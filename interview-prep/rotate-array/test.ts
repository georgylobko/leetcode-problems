import rotate from './index';

test('rotate [1,2,3,4,5,6,7]', () => {
	const array = [1,2,3,4,5,6,7];
	rotate(array, 3)
	expect(array).toStrictEqual([5,6,7,1,2,3,4]);
});
