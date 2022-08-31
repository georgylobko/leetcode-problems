import threeSumClosest from './index';

test('threeSumClosest [-1,2,1,-4]', () => {
	expect(threeSumClosest([-1,2,1,-4], 1)).toStrictEqual(2);
});

test('threeSumClosest [0,0,0]', () => {
	expect(threeSumClosest([0,0,0], 1)).toStrictEqual(0);
});

test('threeSumClosest [1,1,-1,-1,3]', () => {
	expect(threeSumClosest([1,1,-1,-1,3], -1)).toStrictEqual(-1);
});

test('threeSumClosest [0,1,2]', () => {
	expect(threeSumClosest([0,1,2], 0)).toStrictEqual(3);
});
