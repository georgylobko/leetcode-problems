export function swap(array: Array<number>, i: number, j: number) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}
