import maxProfit from './index';

test('maxProfit [7,1,5,3,6,4]', () => {
	expect(maxProfit([7,1,5,3,6,4])).toStrictEqual(5);
});

test('maxProfit [1,4,2]', () => {
	expect(maxProfit([1,4,2])).toStrictEqual(3);
});

test('maxProfit [2,1,4]', () => {
	expect(maxProfit([2,1,4])).toStrictEqual(3);
});

test('maxProfit [1,2,3,4,5]', () => {
	expect(maxProfit([1,2,3,4,5])).toStrictEqual(4);
});

test('maxProfit [7,6,4,3,1]', () => {
	expect(maxProfit([7,6,4,3,1])).toStrictEqual(0);
});

test('maxProfit [3,2,6,5,0,3]', () => {
	expect(maxProfit([3,2,6,5,0,3])).toStrictEqual(4);
});
