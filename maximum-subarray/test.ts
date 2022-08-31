import maxSubArray from './index';

test('maxSubArray [-2,1,-3,4,-1,2,1,-5,4]', () => {
	expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('maxSubArray [1]', () => {
	expect(maxSubArray([1])).toBe(1);
});

test('maxSubArray [5,4,-1,7,8]', () => {
	expect(maxSubArray([5,4,-1,7,8])).toBe(23);
});

test('maxSubArray [-1]', () => {
	expect(maxSubArray([-1])).toBe(-1);
});

test('maxSubArray [-2,-1]', () => {
	expect(maxSubArray([-2,-1])).toBe(-1);
});

test('maxSubArray [1,2,-1,-2,2,1,-2,1,4,-5,4]', () => {
	expect(maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4])).toBe(6);
});
