export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}

function reverseList(head: ListNode): ListNode | null {
	if (!head) {
		return null;
	}

	let prevNode = null;
	let currentNode = head;

	while (currentNode) {
		let nextNode = currentNode.next;
		currentNode.next = prevNode;
		prevNode = currentNode;
		currentNode = nextNode;
	}

	return prevNode;
}

export default reverseList;
