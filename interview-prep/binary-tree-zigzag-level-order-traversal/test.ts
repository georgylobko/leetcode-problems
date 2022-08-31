import zigzagLevelOrder, { TreeNode } from './index';

test('zigzagLeverOrder', () => {
	const node = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

	expect(zigzagLevelOrder(node)).toStrictEqual([[3],[20,9],[15,7]]);
});
