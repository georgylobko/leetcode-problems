import reverseString from './index';

test('reverseString ["h","e","l","l","o"]', () => {
	const array = ["h","e","l","l","o"];
	reverseString(array)
	expect(array).toStrictEqual(["o","l","l","e","h"]);
});

test('reverseString ["H","a","n","n","a","h"]', () => {
	const array = ["H","a","n","n","a","h"];
	reverseString(array)
	expect(array).toStrictEqual(["h","a","n","n","a","H"]);
});
