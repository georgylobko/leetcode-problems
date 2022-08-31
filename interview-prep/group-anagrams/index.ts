function groupAnagrams(strs: string[]): string[][] {
	const sortString = (str: string) => str.split('').sort().join('');
	const obj: Record<string, Array<string>> = {};

	for (let i = 0; i < strs.length; i++) {
		const sortedString = sortString(strs[i]);
		if (obj[sortedString]) {
			obj[sortedString] = obj[sortedString].concat(strs[i]);
		} else {
			obj[sortedString] = [strs[i]];
		}
	}

	return Object.values(obj);
}

export default groupAnagrams;
