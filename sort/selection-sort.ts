import { swap } from './utils';

function selectionSort(array: Array<number>) {
	const result = [...array];

	for (let i = 0; i < result.length; i++) {
		let minIndex = i;

		for (let j = i; j < result.length; j++) {
			if (result[j] < result[minIndex]) {
				minIndex = j;
			}
		}

		swap(result, i, minIndex);
	}

	return result;
}

export default selectionSort;
