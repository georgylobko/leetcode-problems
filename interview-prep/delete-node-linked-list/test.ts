import deleteNode, { ListNode } from './index';

const transformArrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const arrayCopy = [...array].reverse();
	return arrayCopy.reduce<ListNode>((acc, val) => new ListNode(val, acc), null);
}

test('deleteNode', () => {
	const input = transformArrayToLinkedList([4,5,1,9]);
	const output = transformArrayToLinkedList([4,1,9]);

	deleteNode(input.next);

	expect(input).toStrictEqual(output);
});
