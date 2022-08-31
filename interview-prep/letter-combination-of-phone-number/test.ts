import letterCombinations from './index';

test('letterCombinations 23', () => {
	expect(letterCombinations('23')).toStrictEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
});

test('letterCombinations 234', () => {
	expect(letterCombinations('234')).toStrictEqual(["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]);
});

test('letterCombinations', () => {
	expect(letterCombinations('')).toStrictEqual([]);
});

test('letterCombinations 2', () => {
	expect(letterCombinations('2')).toStrictEqual(["a","b","c"]);
});
