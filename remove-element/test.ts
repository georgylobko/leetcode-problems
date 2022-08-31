import removeElement from './index';

test('removeElement [3,2,2,3]', () => {
	expect(removeElement([3,2,2,3], 3)).toBe(2);
});

test('removeElement [0,1,2,2,3,0,4,2]', () => {
	expect(removeElement([0,1,2,2,3,0,4,2], 2)).toBe(5);
});
