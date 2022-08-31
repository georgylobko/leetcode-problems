import removeDuplicates from './index';

test('removeDuplicates [1,1,2]', () => {
	const input = [1,1,2];
	const expected = [1,2,'_'];
	const value = removeDuplicates(input);

	expect(value).toBe(2);
	expect(input).toStrictEqual(expected);
});

test('removeDuplicates [0,0,1,1,1,2,2,3,3,4]', () => {
	const input = [0,0,1,1,1,2,2,3,3,4];
	const expected = [0,1,2,3,4,'_','_','_','_','_'];
	const value = removeDuplicates(input);

	expect(value).toBe(5);
	expect(input).toStrictEqual(expected);
});
