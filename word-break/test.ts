import wordBreak from './index';

describe('wordBreak', () => {
	it('s = "leetcode", wordDict = ["leet","code"]', () => {
		expect(wordBreak("leetcode", ["leet","code"])).toBe(true);
	});

	it('s = "applepenapple", wordDict = ["apple","pen"]', () => {
		expect(wordBreak("applepenapple", ["apple","pen"])).toBe(true);
	});

	it('s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', () => {
		expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"])).toBe(false);
	});
})
