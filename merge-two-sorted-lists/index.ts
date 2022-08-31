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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	let node: ListNode = null;

	if (l1 || l2) {
		const val1 = l1 && l1.val;
		const val2 = l2 && l2.val;

		if (val1 && val2 && val1 === val2) {
			node = new ListNode(val1);
			node.next =  new ListNode(val2);
			node.next.next = mergeTwoLists(l1.next, l2.next);
			return node;
		}

		if (l1 && l2 && val1 <= val2) {
			node = new ListNode(val1);
			node.next = mergeTwoLists(l1.next, l2);
		}

		if (l1 && l2 && val2 <= val1) {
			node = new ListNode(val2);
			node.next = mergeTwoLists(l1, l2.next);
		}

		if (l1 && !l2) {
			node = new ListNode(val1);
			node.next = mergeTwoLists(l1.next, l2);
		}

		if (!l1 && l2) {
			node = new ListNode(val2);
			node.next = mergeTwoLists(l1, l2.next);
		}
	}

	return node;
}

export default mergeTwoLists;
