import searchInsert from './index';

test('searchInsert [1,3,5,6], 5', () => {
	expect(searchInsert([1,3,5,6], 5)).toBe(2);
});

test('searchInsert [1,3,5,6], 2', () => {
	expect(searchInsert([1,3,5,6], 2)).toBe(1);
});

test('searchInsert [1,3,5,6], 7', () => {
	expect(searchInsert([1,3,5,6], 7)).toBe(4);
});

test('searchInsert [1,3,5,6], 0', () => {
	expect(searchInsert([1,3,5,6], 0)).toBe(0);
});

test('searchInsert [1], 0', () => {
	expect(searchInsert([1], 0)).toBe(0);
});
