import generate from './index';

describe('Pascal\'s trriangle', () => {
	it('5', () => {
		expect(generate(5)).toStrictEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
	})
});
