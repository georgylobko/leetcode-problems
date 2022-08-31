function mergeSort(array: Array<number>): Array<number> {
	if (array.length === 1) return array;

	const midPoint = Math.floor(array.length / 2);
	const left = array.slice(0, midPoint);
	const right = array.slice(midPoint);

	return merge(mergeSort(left), mergeSort(right));
}

export function merge(left: Array<number>, right: Array<number>): Array<number> {
	const result = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

export default mergeSort;
