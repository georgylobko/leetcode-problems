function isValid(s: string): boolean {
	if(s.length % 2 !== 0) {
		return false;
	}

	let next = [];
	const matches = {
		')': '(',
		'}': '{',
		']': '['
	};

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (matches[char]) {
			if (next.shift() !== matches[char]) {
				return false;
			}
		} else {
			next.unshift(char);
		}
	}

	return next.length === 0;
}

export default isValid;
