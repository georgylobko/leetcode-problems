class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry?: boolean): ListNode | null {
	let node = null;

	if (l1 || l2) {
		const val1: number = l1?.val || 0;
		const val2: number = l2?.val || 0;
		const next1: ListNode = l1?.next || null;
		const next2: ListNode = l2?.next || null;
		const value = carry ? val1 + val2 + 1 : val1 + val2;
		node = new ListNode(value % 10);
		node.next = addTwoNumbers(next1, next2, value >= 10);
	}

	return node;
}

const arrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const node = new ListNode(array[0]);
	node.next = arrayToLinkedList(array.slice(1));

	return node;
}

const l1 = arrayToLinkedList([2,4,3]);
const l2 = arrayToLinkedList([5,6,4]);

