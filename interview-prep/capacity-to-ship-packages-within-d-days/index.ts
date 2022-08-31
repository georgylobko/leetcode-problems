function shipWithinDays(weights: number[], days: number): number {
	const possibleToShip = (capacity: number): boolean => {
		let currentWeight = 0;
		let daysToShip = 1;

		for (let i = 0; i < weights.length; i++) {
			currentWeight += weights[i];

			if (currentWeight > capacity) {
				currentWeight = weights[i];
				if (++daysToShip > days) {
					return false;
				}
			}
		}

		return true;
	}

	let l = Math.max(...weights);
	let r = weights.reduce((acc, curr) => acc + curr, 0);
	let index = l;

	while (l <= r) {
		let mid = l + Math.floor((r - l) / 2);
		if (possibleToShip(mid)) {
			index = mid;
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}

	return index;
}

export default shipWithinDays;
