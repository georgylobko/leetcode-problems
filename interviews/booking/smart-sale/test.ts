import smartSale from './index';

test('smartSale [1,1,1,2,3,4] 2', () => {
	expect(smartSale([1,1,1,2,3,4], 2)).toBe(2);
});
