let count = 0;

function transformString(s: string): string {
	return s.split('').reverse().reduce((acc, curr) => {
		if (curr === '#') {
			count++;
			return acc;
		} else if (Boolean(count)) {
			count--;
			return acc;
		}

		return acc + curr;
	}, '').split('').reverse().join('');
}

function compareStrings(s1: string, s2: string): number {
	return transformString(s1) === transformString(s2) ? 1 : 0;
}

export default compareStrings;
