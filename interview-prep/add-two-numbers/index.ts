export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	function add(l1: ListNode | null, l2: ListNode | null, remainder?: boolean): ListNode | null {
		let node: ListNode = null;

		if (l1 || l2) {
			let val1 = l1?.val || 0;
			let val2 = l2?.val || 0;
			let next1 = l1?.next || null;
			let next2 = l2?.next || null;
			const sum = remainder ? val1 + val2 + 1 : val1 + val2;
			node = new ListNode(sum % 10);
			node.next = add(next1, next2, sum >= 10);
		} else if (remainder) {
			node = new ListNode(1);
		}

		return node;
	}

	return add(l1, l2, false);
}

export default addTwoNumbers;
