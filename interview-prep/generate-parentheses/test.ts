import generateParenthesis from './index';

test('generateParenthesis', () => {
	expect(generateParenthesis(3)).toStrictEqual(["((()))","(()())","(())()","()(())","()()()"]);
});
