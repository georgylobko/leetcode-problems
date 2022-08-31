export class Node {
	val: number;
	children: Array<Node>;

	constructor(val: number, children: Array<Node> = []) {
		this.val = val;
		this.children = children;
	}
}

function ternaryTreePaths(root: Node) {
	const result = [];

	const dfs = (currentNode: Node, path: Array<number>) => {
		if (currentNode.children.length === 0) {
			result.push(path.concat(currentNode.val).join('->'));
		}

		for (const child of currentNode.children) {
			dfs(child, [...path, currentNode.val]);
		}
	}

	dfs(root, []);

	return result;
}

export default ternaryTreePaths;
