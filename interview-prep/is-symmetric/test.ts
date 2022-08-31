import isSymmetric, { TreeNode } from './index';

describe('isSymmetric', () => {
	it('1,2,2,3,4,4,3', () => {
		const root = new TreeNode(1,
			new TreeNode(2, new TreeNode(3), new TreeNode(4)),
			new TreeNode(2, new TreeNode(4), new TreeNode(3))
		);

		expect(isSymmetric(root)).toBe(true);
	});

	it('1,2,2,null,3,null,3', () => {
		const root = new TreeNode(1,
			new TreeNode(2, null, new TreeNode(3)),
			new TreeNode(2, null, new TreeNode(3))
		);

		expect(isSymmetric(root)).toBe(false);
	});
})
