import reverseList, { ListNode } from './index';

const transformArrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const arrayCopy = [...array].reverse();
	return arrayCopy.reduce<ListNode>((acc, val) => new ListNode(val, acc), null);
}

test('reverseList', () => {
	const input = transformArrayToLinkedList([1,2,3,4,5]);
	const output = transformArrayToLinkedList([5,4,3,2,1]);

	expect(reverseList(input)).toStrictEqual(output);
});
