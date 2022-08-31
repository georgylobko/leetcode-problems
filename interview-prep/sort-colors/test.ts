import sortColors from './index';

describe('sortColors', () => {
	it('[2,0,2,1,1,0]', () => {
		const input = [2,0,2,1,1,0];
		sortColors(input);
		expect(input).toStrictEqual([0,0,1,1,2,2]);
	})
});
