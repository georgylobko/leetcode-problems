import funWithAnagrams from './index';

// test('funWithAnagrams', () => {
// 	expect(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame'])).toStrictEqual(['code', 'frame', 'framer'])
// });
//
// test('funWithAnagrams', () => {
// 	expect(funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop'])).toStrictEqual(['poke'])
// });

test('funWithAnagrams', () => {
	expect(funWithAnagrams(['code', 'aaagmnrs', 'anagrams', 'doce'])).toStrictEqual(['aaagmnrs', 'code'])
});
