import singleNumber from './index';

test('singleNumber [2,2,1]', () => {
	expect(singleNumber([2,2,1])).toBe(1);
});

test('singleNumber [4,1,2,1,2]', () => {
	expect(singleNumber([4,1,2,1,2])).toBe(4);
});

test('singleNumber [1]', () => {
	expect(singleNumber([1])).toBe(1);
});
