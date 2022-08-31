import TreeNode from './treeNode';

//      9
//   4     20
// 1  6  15  170
const depthFirstSearch = (node: TreeNode, list?: Array<number>): Array<number> => {
	const data = list || [];
	if (node.left) {
		depthFirstSearch(node.left, data);
	}
	data.push(node.val);
	if (node.right) {
		depthFirstSearch(node.right, data);
	}

	return data;
}

export default depthFirstSearch;
