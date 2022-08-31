function countChars(str: string): Map<string, number> {
	const map = new Map();

	str.split('').forEach((char) => {
		map.set(char, map.has(char) ? map.get(char) + 1 : 1);
	});

	console.log(map);

	return map;
}

export default countChars;
