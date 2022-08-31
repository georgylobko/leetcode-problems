import missingNumber from './index';

describe('missingNumber', () => {
	it('[3,0,1]', () => {
		expect(missingNumber([3,0,1])).toBe(2);
	});

	it('[9,6,4,2,3,5,7,0,1]', () => {
		expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
	});
})
