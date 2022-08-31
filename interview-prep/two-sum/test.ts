import twoSum from './index';

test('twoSum [2,7,11,15]', () => {
	expect(twoSum([2,7,11,15], 9)).toStrictEqual([0,1]);
});

test('twoSum [3,2,4]', () => {
	expect(twoSum([3,2,4], 6)).toStrictEqual([1,2]);
});

test('twoSum [2,5,5,11]', () => {
	expect(twoSum([2,5,5,11], 10)).toStrictEqual([1,2]);
});
