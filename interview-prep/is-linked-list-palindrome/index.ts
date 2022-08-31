export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}

function isPalindrome(head: ListNode | null): boolean {
	let currentNode = head;
	let array = [];

	while (currentNode) {
		array.push(currentNode.val);
		currentNode = currentNode.next;
	}

	let l = 0;
	let r = array.length - 1;

	while (l <= r) {
		if (array[l] !== array[r]) {
			return false;
		}
		l++;
		r--;
	}

	return true;
}

export default isPalindrome;
