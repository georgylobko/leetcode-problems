import swapPairs, { arrayToLinkedList } from './index';

test('swapPairs [1,2,3,4]', () => {
	expect(swapPairs(arrayToLinkedList([1,2,3,4]))).toStrictEqual(arrayToLinkedList([2,1,4,3]));
});
