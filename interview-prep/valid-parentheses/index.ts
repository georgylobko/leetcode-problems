function isValid(s: string): boolean {
	const match = {
		'}': '{',
		']': '[',
		')': '('
	};

	if (s.length === 1) {
		return false;
	}

	const queue = [];
	const charsArray = s.split('');

	for (let i = 0; i < charsArray.length; i++) {
		const char = charsArray[i];

		if (!match[char]) {
			queue.push(char);
		} else {
			if (match[char] !== queue.pop()) {
				return false;
			}
		}
	}

	return queue.length === 0;
}

export default isValid;
