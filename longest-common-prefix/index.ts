function longestCommonPrefix(strs: string[]): string {
	let prefix = strs[0];

	strs.forEach((str) => {
		while (str.indexOf(prefix) !== 0) {
			prefix = prefix.slice(0 ,-1);
			if (!prefix.length) {
				return '';
			}
		}
	})

	return prefix;
}

export default longestCommonPrefix;
