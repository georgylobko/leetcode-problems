function newspapersSplit(newspapers: Array<number>, coworkers: number): number {
	const possibleToReadWithinTime = (time: number) => {
		let currentTime = 0;
		let necessaryCoworkers = 1;

		for (let i = 0; i < newspapers.length; i++) {
			currentTime += newspapers[i];
			if (currentTime > time) {
				if (++necessaryCoworkers > coworkers) {
					return false;
				}
				currentTime = newspapers[i];
			}
		}

		return true;
	}

	let l = Math.max(...newspapers);
	let r = newspapers.reduce((acc, curr) => acc + curr, 0);
	let index = 0;

	while (l <= r) {
		let mid = l + Math.floor((r - l) / 2);
		if (possibleToReadWithinTime(mid)) {
			index = mid;
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}

	return index;
}

export default newspapersSplit;
