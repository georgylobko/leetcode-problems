import sortedArrayToBST, { TreeNode } from './index';

test('sortedArrayToBST', () => {
	expect(sortedArrayToBST([-10,-3,0,5,9])).toStrictEqual(new TreeNode(0, new TreeNode(-3, new TreeNode(-10)), new TreeNode(9, new TreeNode(5))))
});
