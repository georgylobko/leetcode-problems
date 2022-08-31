export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	let currentNode = head;
	const array = [];

	while (currentNode) {
		array.push(currentNode);
		currentNode = currentNode.next;
	}

	if (array.length === 1) {
		return null;
	}

	const indexToDelete = array.length - n;

	if (array[indexToDelete].next) {
		array[indexToDelete].val = array[indexToDelete].next.val;
		array[indexToDelete].next = array[indexToDelete].next.next;

		return head;
	}

	if (!array[indexToDelete].next) {
		array[indexToDelete - 1].next = null;

		return head;
	}
}

export default removeNthFromEnd;
