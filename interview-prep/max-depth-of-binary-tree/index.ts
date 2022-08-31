import TreeNode from '../../tree/treeNode';

function maxDepth(root: TreeNode | null): number {
	let max = 0;

	const explore = (node: TreeNode, depth: number) => {
		if (!node) return null;

		max = Math.max(max, depth);

		if (node.left) explore(node.left, depth + 1);
		if (node.right) explore(node.right, depth + 1);
	};

	explore(root, 1);

	return max;
}

export default maxDepth;
