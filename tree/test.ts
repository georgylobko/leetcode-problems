import TreeNode from './treeNode';
import breadthFirstSearch from './bfs';
import depthFirstSearch from './dfs';

//      9
//   4     20
// 1  6  15  170
const tree = new TreeNode(
	9,
		new TreeNode(4,
			new TreeNode(1), new TreeNode(6)),
		new TreeNode(20,
			new TreeNode(15), new TreeNode(170)));

test('breadthFirstSearch', () => {
	expect(breadthFirstSearch(tree)).toStrictEqual([9,4,20,1,6,15,170]);
});

test('depthFirstSearch', () => {
	expect(depthFirstSearch(tree)).toStrictEqual([1,4,6,9,15,20,170]);
});
