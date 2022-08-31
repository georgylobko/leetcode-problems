export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}

function findTarget(root: TreeNode | null, k: number): boolean {
	let result = false;
	let counter = 0;
	const differences = {};

	function inorderTraversal(node: TreeNode) {
		if (node.left) {
			inorderTraversal(node.left);
		}
		if (k - node.val in differences) {
			result = true;
		} else {
			differences[node.val] = counter;
		}
		counter++;
		if (node.right) {
			inorderTraversal(node.right);
		}
	}

	inorderTraversal(root);

	return result;
}

export default findTarget;
