function findFirstOccurrence(arr: Array<number>, target: number): number {
	if (arr.length === 1 && arr[0] === target) {
		return 0;
	}

	let l = 0;
	let r = arr.length - 1;

	while (l < r) {
		let mid = l + Math.floor((r - l) / 2);
		if (arr[mid] === target) {
			while (arr[mid-1] === target) {
				mid--;
			}
			return mid;
		}

		if (arr[mid] < target) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}

	return -1;
}

export default findFirstOccurrence;
