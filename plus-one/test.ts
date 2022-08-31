import plusOne from './index';

test('plusOne [1,2,3]', () => {
	expect(plusOne([1,2,3])).toStrictEqual([1,2,4]);
});

test('plusOne [4,3,2,1]', () => {
	expect(plusOne([4,3,2,1])).toStrictEqual([4,3,2,2]);
});

test('plusOne [0]', () => {
	expect(plusOne([0])).toStrictEqual([1]);
});

test('plusOne [9,9]', () => {
	expect(plusOne([9,9])).toStrictEqual([1,0,0]);
});

test('plusOne [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]', () => {
	expect(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])).toStrictEqual([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]);
});

test('plusOne [1,9,9,9]', () => {
	expect(plusOne([1,9,9,9])).toStrictEqual([2,0,0,0]);
});
