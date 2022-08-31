import addTwoNumbers, { ListNode } from './index';

const transformArrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const arrayCopy = [...array].reverse();
	return arrayCopy.reduce<ListNode>((acc, val) => new ListNode(val, acc), null);
}

test('addTwoNumbers', () => {
	expect(
		addTwoNumbers(
			transformArrayToLinkedList([2,4,3]),
			transformArrayToLinkedList([5,6,4]))
	).toStrictEqual(
		transformArrayToLinkedList([7,0,8])
	)
});
