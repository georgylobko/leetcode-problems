import firstUniqChar from './index';

test('firstUniqChar leetcode', () => {
	expect(firstUniqChar('leetcode')).toBe(0);
});

test('firstUniqChar loveleetcode', () => {
	expect(firstUniqChar('loveleetcode')).toBe(2);
});

test('firstUniqChar aabb', () => {
	expect(firstUniqChar('aabb')).toBe(-1);
});
