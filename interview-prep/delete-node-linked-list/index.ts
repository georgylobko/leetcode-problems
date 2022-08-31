export class ListNode {
	val: number;
	next: ListNode | null;

	constructor(val?: number, next?: ListNode | null) {
		this.val = val;
		this.next = next || null;
	}
}

function deleteNode(root: ListNode | null): void {
	const next = root.next;
	root.val = next.val;
	root.next = next.next;
}

export default deleteNode;
