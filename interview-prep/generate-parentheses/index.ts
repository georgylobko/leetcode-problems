function generateParenthesis(n: number): string[] {
	const result = [];

	const backtrack = (group: Array<string>, opened: number, closed: number) => {
		if (group.length === n * 2) {
			result.push(group.join(''));
			return;
		}

		if (opened < n) {
			group.push('(');
			backtrack(group, opened + 1, closed);
			group.pop();
		}

		if (closed < opened) {
			group.push(')');
			backtrack(group, opened, closed + 1);
			group.pop();
		}

	};

	backtrack([],0, 0);

	return result;
}

export default generateParenthesis;
