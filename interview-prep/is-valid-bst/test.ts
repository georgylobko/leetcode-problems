import TreeNode from '../../tree/treeNode';
import isValidBST from './index';

//      9
//   4     20
// 1  6  15  170
const tree1 = new TreeNode(
	9,
	new TreeNode(4,
		new TreeNode(1), new TreeNode(6)),
	new TreeNode(20,
		new TreeNode(15), new TreeNode(170)));

test('isValidBST', () => {
	expect(isValidBST(tree1)).toBe(true);
});

//      2
//   2     2
const tree2 = new TreeNode(
	2,
	new TreeNode(2, new TreeNode(2), new TreeNode(2)));

test('isValidBST', () => {
	expect(isValidBST(tree2)).toBe(false);
});

//      5
//   4      6
//       3     7
const tree3 = new TreeNode(
	5,
	new TreeNode(4),
	new TreeNode(6,
		new TreeNode(3), new TreeNode(7)));

test('isValidBST', () => {
	expect(isValidBST(tree3)).toBe(false);
});

const tree4 = new TreeNode(
	0, null, new TreeNode(-1));

test('isValidBST', () => {
	expect(isValidBST(tree4)).toBe(false);
});
