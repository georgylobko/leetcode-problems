import groupAnagrams from './index';

test('groupAnagrams ["eat","tea","tan","ate","nat","bat"]', () => {
	expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toStrictEqual([["bat"],["nat","tan"],["ate","eat","tea"]])
});
