function strStr(haystack: string, needle: string): number {
	if (!haystack.length && needle.length || needle.length > haystack.length) {
		return -1;
	}

	if (!haystack.length || !needle.length) {
		return 0;
	}

	let index = -1;

	for (let j = 0; j < haystack.length; j++) {
		if (haystack.slice(j, j + needle.length) === needle) {
			return j;
		}
	}

	return index;
}

export default strStr;
