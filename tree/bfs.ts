import TreeNode from './treeNode';

const breadthFirstSearch = (root: TreeNode): Array<number> => {
	let currentNode = root;
	const list = [];
	const queue = [];
	queue.push(root);

	while (queue.length) {
		currentNode = queue.shift();
		list.push(currentNode.val);

		if (currentNode.left) {
			queue.push(currentNode.left);
		}

		if (currentNode.right) {
			queue.push(currentNode.right);
		}
	}

	return list;
}

export default breadthFirstSearch;
