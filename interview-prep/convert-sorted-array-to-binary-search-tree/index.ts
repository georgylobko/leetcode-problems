export class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.left = (left===undefined ? null : left)
		this.right = (right===undefined ? null : right)
	}
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
	const convertSortedArrayToBST = (nums: number[], left: number, right: number): TreeNode => {
		if (right < left) return null;
		const mid = Math.ceil(left + ((right - left) / 2));
		const node = new TreeNode(nums[mid]);
		node.left = convertSortedArrayToBST(nums, left, mid - 1);
		node.right = convertSortedArrayToBST(nums, mid + 1, right);

		return node;
	}

	return convertSortedArrayToBST(nums, 0, nums.length - 1);
}

export default sortedArrayToBST;
