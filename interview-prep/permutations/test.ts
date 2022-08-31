import permute from './index';

describe('permute', () => {
	it('nums = [1,2,3]', () => {
		expect(permute([1,2,3])).toStrictEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
	});

	it('nums = [1]', () => {
		expect(permute([1])).toStrictEqual([[1]]);
	});
})
