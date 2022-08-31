function peakOfMountainArray(arr: Array<number>): number {
	let l = 0;
	let r = arr.length - 1;
	let index = -1;

	while (l <= r) {
		const mid = l + Math.ceil( (r - l) / 2);
		if (arr[mid] > arr[mid+1]) {
			index = mid;
			r = mid - 1;
		} else {
			l = mid + 1;
		}
	}

	return index;
}

export default peakOfMountainArray;
