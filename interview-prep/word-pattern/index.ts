function wordPattern(pattern: string, s: string): boolean {
	const stringArray = s.split(' ');
	if (pattern.length !== stringArray.length) return false;

	const length = stringArray.length;
	const mapPattern = new Map();
	const mapString = new Map();

	for (let i = 0; i < length; i++) {
		const patternEl = pattern[i];
		const stringEl = stringArray[i];

		if (!mapPattern.has(patternEl) && !mapString.has(stringEl)) {
			mapPattern.set(patternEl, stringEl);
			mapString.set(stringEl, patternEl);
		} else {
			if (mapPattern.get(patternEl) !== stringEl && mapString.get(stringEl) !== patternEl) {
				return false;
			}
		}
	}

	return true;
}

export default wordPattern;
