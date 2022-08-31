import buildTree, { TreeNode } from './index';

describe('buildTree', () => {
	it('preorder [9,4,1,6,20,15,170] inorder [1,4,6,9,15,20,170]', () => {
		expect(
			buildTree([9,4,1,6,20,15,170], [1,4,6,9,15,20,170])
		).toStrictEqual(
			new TreeNode(9,
				new TreeNode(4, new TreeNode(1), new TreeNode(6)),
				new TreeNode(20, new TreeNode(15), new TreeNode(170))
			)
		)
	});

	// it('preorder [3,9,20,15,7] inorder [9,3,15,20,7]', () => {
	// 	expect(
	// 		buildTree([3,9,20,15,7], [9,3,15,20,7])
	// 	).toStrictEqual(
	// 		new TreeNode(3,
	// 			new TreeNode(9),
	// 			new TreeNode(20, new TreeNode(15), new TreeNode(7))
	// 		)
	// 	)
	// });
})
