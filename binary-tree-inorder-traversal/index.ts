
 // Definition for a binary tree node.
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

//      9
//   4     20
// 1  6  15  170

function traversal(root: TreeNode | null, list = []) {
	if (root && root.left) {
		traversal(root.left, list);
	}

	if (root) {
		list.push(root.val);
	}

	if (root && root.right) {
		traversal(root.right, list);
	}

	return list;
}

function inorderTraversal(root: TreeNode | null): number[] {
	return traversal(root, []);
}

export default inorderTraversal;
