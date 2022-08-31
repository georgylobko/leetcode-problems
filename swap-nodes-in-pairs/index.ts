/**
 * Definition for singly-linked list.
 */

class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

export function arrayToLinkedList(array: number[]): ListNode {
	let node, temp;

	for (let i = array.length - 1; i >= 0; i--) {
		if (!node) {
			node = new ListNode(array[i]);
		} else {
			temp = new ListNode(array[i]);
			temp.next = node;
			node = temp;
		}
	}

	return node;
}

function swapPairs(head: ListNode | null): ListNode | null {
	const temp = new ListNode(0);
	temp.next = head;
	let current = temp;

	while (current.next && current.next.next) {
		const first = current.next;
		const second = current.next.next;

		first.next = second.next;
		current.next = second;
		current.next.next = first;
		current = current.next.next;
	}

	return temp.next;
}

export default swapPairs;
