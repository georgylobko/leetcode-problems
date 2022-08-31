import solution from './index';

test('solution', () => {
	const isBadVersion = (n: number) => n >= 4;

	expect(solution(isBadVersion)(41)).toBe(4);
})
