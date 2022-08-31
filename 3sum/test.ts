import threeSum from './index';

test('threeSum [-1,0,1,2,-1,-4]', () => {
	expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
});

test('threeSum [-2,0,0,2,2]', () => {
	expect(threeSum([-2,0,0,2,2])).toStrictEqual([[-2,0,2]]);
});

test('threeSum [0]', () => {
	expect(threeSum([0])).toStrictEqual([]);
});
