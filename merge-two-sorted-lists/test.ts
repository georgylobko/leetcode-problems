import mergeTwoLists, { arrayToLinkedList } from './index';

test('mergeTwoLists [1,2,4] [1,3,4]', () => {
	expect(mergeTwoLists(arrayToLinkedList([1,2,4]), arrayToLinkedList([1,3,4]))).toStrictEqual(arrayToLinkedList([1,1,2,3,4,4]));
});

test('mergeTwoLists [] [0]', () => {
	expect(mergeTwoLists(arrayToLinkedList([]), arrayToLinkedList([0]))).toStrictEqual(arrayToLinkedList([0]));
});
