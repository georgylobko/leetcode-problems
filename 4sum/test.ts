import fourSum from './index';

test('fourSum [1,0,-1,0,-2,2]', () => {
	expect(fourSum([1,0,-1,0,-2,2], 0)).toStrictEqual([[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]);
});

test('fourSum [2,2,2,2,2]', () => {
	expect(fourSum([2,2,2,2,2], 8)).toStrictEqual([[2,2,2,2]]);
});

test('fourSum [0,0,0,0]', () => {
	expect(fourSum([0,0,0,0], 0)).toStrictEqual([[0,0,0,0]]);
});

test('fourSum [-3,-1,0,2,4,5]', () => {
	expect(fourSum([-3,-1,0,2,4,5], 0)).toStrictEqual([[-3,-1,0,4]]);
});

test('fourSum [-2,-1,-1,1,1,2,2]', () => {
	expect(fourSum([-2,-1,-1,1,1,2,2], 0)).toStrictEqual([[-2,-1,1,2],[-1,-1,1,1]]);
});

test('fourSum [-3,-1,0,2,4,5]', () => {
	expect(fourSum([-3,-1,0,2,4,5], 2)).toStrictEqual([[-3,-1,2,4]]);
});
