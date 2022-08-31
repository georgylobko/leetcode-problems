export class TreeNode {
	val: number;
	left: TreeNode;
	right: TreeNode;

	constructor(val?: number, left?: TreeNode, right?: TreeNode) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

function levelOrder(root: TreeNode | null): number[][] {
	const result = [];

	if (!root) {
		return result;
	}

	let queue = [root];

	while (queue.length) {
		let newQueue = [];
		let temp = [];

		for (let i = 0; i < queue.length; i++) {
			let currentNode = queue[i];
			temp.push(currentNode.val);
			if (currentNode?.left) {
				newQueue.push(currentNode.left);
			}
			if (currentNode?.right) {
				newQueue.push(currentNode.right);
			}
		}

		result.push(temp);
		queue = newQueue;
	}

	return result;
}

export default levelOrder;
