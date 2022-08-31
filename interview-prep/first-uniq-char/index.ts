function firstUniqChar(s: string): number {
	const obj = {};
	const arr = s.split('');

	arr.forEach((char) => {
		if (obj[char]) {
			obj[char] = obj[char] + 1;
		} else {
			obj[char] = 1;
		}
	});

	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i]] === 1) {
			return i;
		}
	}

	return -1;
}

export default firstUniqChar;
