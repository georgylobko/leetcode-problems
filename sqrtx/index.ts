function mySqrt(x: number): number {
	let low = 1;
	let high = x;
	let result = 0;

	while (high >= low) {
		let mid = Math.round((high + low) / 2);

		if (mid <= x / mid) {
			result = mid;
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}

	return result;
}

export default mySqrt;
