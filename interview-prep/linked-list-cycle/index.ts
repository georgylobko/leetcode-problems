export class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}

function hasCycle(head: ListNode | null): boolean {
	let currentNode = head;
	const visited = new Set();

	while (currentNode) {
		if (visited.has(currentNode)) {
			return true;
		}
		visited.add(currentNode);
		currentNode = currentNode.next;
	}

	return false;
}

export default hasCycle;
