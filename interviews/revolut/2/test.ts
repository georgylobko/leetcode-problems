import entryTime from './index';

test('entryTime', () => {
	expect(entryTime('423692', '923857614')).toBe(8);
});
