import subarraySum from './index';

test('subarraySum [1,2,3] 3', () => {
	expect(subarraySum([1,2,3], 3)).toBe(2);
});

test('subarraySum [1,1,1] 2', () => {
	expect(subarraySum([1,1,1], 2)).toBe(2);
});

test('subarraySum [-1,-1,1] 2', () => {
	expect(subarraySum([-1,-1,1], 2)).toBe(0);
});

test('subarraySum [-1,-1,1] 0', () => {
	expect(subarraySum([-1,-1,1], 0)).toBe(1);
});
