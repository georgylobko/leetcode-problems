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

function isSymmetric(root: TreeNode | null): boolean {
	const dfs = (leftNode: TreeNode, rightNode: TreeNode) => {
		if (!leftNode && !rightNode) {
			return true;
		}

		if (
			leftNode && !rightNode ||
			!leftNode && rightNode ||
			leftNode.val !== rightNode.val
		) {
			return false;
		}

		return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
	}

	return dfs(root.left, root.right);
}

export default isSymmetric;
