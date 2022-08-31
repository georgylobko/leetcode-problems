import inorderTraversal, { TreeNode } from './index';

test('inorderTraversal', () => {
	const value = new TreeNode(9,
		new TreeNode(4, new TreeNode(1), new TreeNode(6)),
		new TreeNode(20, new TreeNode(15), new TreeNode(170))
	);
	expect(inorderTraversal(value)).toBe([1,4,6,9,15,20,170]);
});
