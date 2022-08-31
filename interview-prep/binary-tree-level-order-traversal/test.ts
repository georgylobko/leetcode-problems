import levelOrder, { TreeNode } from './index';

test('levelOrder', () => {
	const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
	expect(levelOrder(root)).toStrictEqual([[3],[9,20],[15,7]]);
});

test('levelOrder', () => {
	const root = new TreeNode(0,
		new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1))),
		new TreeNode(4, new TreeNode(3, null, new TreeNode(6)), new TreeNode(-1, null, new TreeNode(8)))
	);
	expect(levelOrder(root)).toStrictEqual([[0],[2,4],[1,3,-1],[5,1,6,8]]);
});
