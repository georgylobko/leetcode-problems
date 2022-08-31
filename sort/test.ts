import bubbleSort from './bubble-sort';
import selectionSort from './selection-sort';
import insertionSort from './insertion-sort';
import mergeSort, { merge } from './merge-sort';

describe('bubbleSort', () => {
	it('[4,7,9,1,8,5,2]', () => {
		expect(bubbleSort([4,7,9,1,8,5,2])).toStrictEqual([1,2,4,5,7,8,9]);
	});
});

describe('selectionSort', () => {
	it('[4,7,9,1,8,5,2]', () => {
		expect(selectionSort([4,7,9,1,8,5,2])).toStrictEqual([1,2,4,5,7,8,9]);
	});
});

describe('insertionSort', () => {
	it('[4,7,9,1,8,5,2]', () => {
		expect(insertionSort([4,7,9,1,8,5,2])).toStrictEqual([1,2,4,5,7,8,9]);
	});
});

describe('mergeSort', () => {
	it('[4,7,9,1,8,5,2]', () => {
		expect(mergeSort([4,7,9,1,8,5,2])).toStrictEqual([1,2,4,5,7,8,9]);
	});
});
