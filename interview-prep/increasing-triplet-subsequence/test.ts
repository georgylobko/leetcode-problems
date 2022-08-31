import increasingTriplet from './index';

test('increasingTriplet [1,2,3,4,5]', () => {
	expect(increasingTriplet([1,2,3,4,5])).toBe(true);
});

test('increasingTriplet [5,4,3,2,1]', () => {
	expect(increasingTriplet([5,4,3,2,1])).toBe(false);
});

test('increasingTriplet [2,1,5,0,4,6]', () => {
	expect(increasingTriplet([2,1,5,0,4,6])).toBe(true);
});

test('increasingTriplet [50,40,2,1,5,0,4,6,25,0,4,1]', () => {
	expect(increasingTriplet([50,40,2,1,5,0,4,6,25,0,4,1])).toBe(true);
});

test('increasingTriplet [20,100,10,12,5,13]', () => {
	expect(increasingTriplet([20,100,10,12,5,13])).toBe(true);
});
