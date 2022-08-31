import plusOne from './index';

test('plusOne [1,2,3]', () => {
	expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
});

test('plusOne [4,3,2,1]', () => {
	expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
});

test('plusOne [9]', () => {
	expect(plusOne([9])).toStrictEqual([1,0]);
});

test('plusOne [5,8,8,9]', () => {
	expect(plusOne([5,8,8,9])).toStrictEqual([5,8,9,0]);
});
