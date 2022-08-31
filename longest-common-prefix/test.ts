import longestCommonPrefix from './index';

test('longestCommonPrefix ["flower","flow","flight"]', () => {
	expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
});

// test('longestCommonPrefix ["dog","racecar","car"]', () => {
// 	expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
// });
//
// test('longestCommonPrefix ["c","acc","ccc"]', () => {
// 	expect(longestCommonPrefix(["c","acc","ccc"])).toBe('');
// });
