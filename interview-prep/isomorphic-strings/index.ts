function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const length = s.length;
	const mapS = new Map();
	const mapT = new Map();

	for (let i = 0; i < length; i++) {
		const charS = s[i];
		const charT = t[i];

		if (!mapS.has(charS) && !mapT.has(charT)) {
			mapS.set(charS, charT);
			mapT.set(charT, charS);
		} else {
			if (!(mapS.get(charS) === charT && mapT.get(charT) === charS)) return false;
		}
	}

	return true;
}

export default isIsomorphic;
