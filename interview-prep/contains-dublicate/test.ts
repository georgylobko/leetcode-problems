import containsDuplicate from './index';

test('containsDuplicate [1,2,3,1]', () => {
	expect(containsDuplicate([1,2,3,1])).toBe(true);
});

test('containsDuplicate [1,2,3,4]', () => {
	expect(containsDuplicate([1,2,3,4])).toBe(false);
});

test('containsDuplicate [1,1,1,3,3,4,3,2,4,2]', () => {
	expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
});
