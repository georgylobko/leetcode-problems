import removeNthFromEnd, { ListNode } from './index';

const transformArrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const arrayCopy = [...array].reverse();
	return arrayCopy.reduce<ListNode>((acc, val) => new ListNode(val, acc), null);
}

test('removeNthFromEnd [1,2,3,4,5] 2', () => {
	const input = transformArrayToLinkedList([1,2,3,4,5]);
	const output = transformArrayToLinkedList([1,2,3,5]);

	expect(removeNthFromEnd(input, 2)).toStrictEqual(output);
});

test('removeNthFromEnd [1] 1', () => {
	const input = transformArrayToLinkedList([1]);
	const output = transformArrayToLinkedList([]);

	expect(removeNthFromEnd(input, 1)).toStrictEqual(output);
});

test('removeNthFromEnd [1,2] 1', () => {
	const input = transformArrayToLinkedList([1,2]);
	const output = transformArrayToLinkedList([1]);

	expect(removeNthFromEnd(input, 1)).toStrictEqual(output);
});

test('removeNthFromEnd [1,2,3] 1', () => {
	const input = transformArrayToLinkedList([1,2,3]);
	const output = transformArrayToLinkedList([1,2]);

	expect(removeNthFromEnd(input, 1)).toStrictEqual(output);
});
