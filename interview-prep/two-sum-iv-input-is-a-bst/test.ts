import findTarget, { TreeNode } from './index';

test('findTarget', () => {
	const node = new TreeNode(5,
		new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7))
	);
	expect(findTarget(node, 9)).toBe(true);
});
