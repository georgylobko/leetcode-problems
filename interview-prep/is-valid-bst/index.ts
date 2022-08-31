import TreeNode from '../../tree/treeNode';

function isValidBST(root: TreeNode | null): boolean {
	const validate = (root: TreeNode, low?: number, high?: number) => {
		if (!root) {
			return true;
		}

		if ((high !== null && root.val >= high) || (low !== null && root.val <= low)) {
			return false;
		}

		return validate(root.left, low, root.val) && validate(root.right, root.val, high);
	}

	if (!root.left && !root.right) {
		return true;
	}

	return validate(root, null, null);
}

export default isValidBST;
