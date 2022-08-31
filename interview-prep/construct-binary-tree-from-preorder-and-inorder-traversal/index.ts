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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	let index = 0;
	const inorderMap = new Map();
	for (let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i);
	}

	const build = (left: number, right: number) => {
		if (left > right) return null;
		const rootValue = preorder[index++];
		const rootNode = new TreeNode(rootValue);

		rootNode.left = build(left, inorderMap.get(rootValue) - 1);
		rootNode.right = build(inorderMap.get(rootValue) + 1, right);

		return rootNode;
	}

	return build(0, preorder.length - 1);
}

export default buildTree;
