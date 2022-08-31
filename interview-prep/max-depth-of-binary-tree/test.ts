import TreeNode from '../../tree/treeNode';
import maxDepth from './index';

//      3
//   9     20
//       15   7
const tree = new TreeNode(
	3,
	new TreeNode(9),
	new TreeNode(20,
		new TreeNode(15), new TreeNode(7)));

test('maxDepth', () => {
	expect(maxDepth(tree)).toStrictEqual(3);
});
