export class Node {
	val: number
	left: Node | null
	right: Node | null
	next: Node | null

	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
		this.next = (next === undefined ? null : next)
	}
}

function connect(root: Node | null): Node | null {
	if (!root) {
		return null;
	}

	let queue = [];
	queue.push(root);

	const populate = (level: Node[]) => {
		for (let i = 0; i < level.length; i++) {
			const current = level[i];
			current.next = level[i+1] || null;
		}
	}

	while (queue.length) {
		const level = [];
		const tempQueue = [];

		for (let i = 0; i < queue.length; i++) {
			const current = queue[i];
			level.push(current);

			if (current.left) {
				tempQueue.push(current.left);
			}

			if (current.right) {
				tempQueue.push(current.right);
			}
		}

		populate(level);
		queue = tempQueue;
	}

	return root;
}

export default connect;
