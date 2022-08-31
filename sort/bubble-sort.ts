import { swap } from './utils';

function bubbleSort(array: Array<number>) {
	const result = [...array];

	for (let i = 0; i < result.length; i++) {
		for (let j = 0; j < result.length; j++) {
			if (result[j] > result[j + 1]) {
				swap(result, j, j + 1);
			}
		}
	}

	return result;
}

export default bubbleSort;
