import maxArea from './index';

test('maxArea of [1,8,6,2,5,4,8,3,7]', () => {
	expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});

test('maxArea of [4,3,2,1,4]', () => {
	expect(maxArea([4,3,2,1,4])).toBe(16);
});

test('maxArea of [1,2,1]', () => {
	expect(maxArea([1,2,1])).toBe(2);
});
