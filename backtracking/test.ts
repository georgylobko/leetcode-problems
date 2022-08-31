import ternaryTreePaths, { Node } from './ternaryTreePaths';
import permutations from './permutations';

describe('ternaryTreePaths', () => {
	it('12346', () => {
		const root = new Node(1, [new Node(2, [new Node(3)]), new Node(4), new Node(6)]);
		expect(ternaryTreePaths(root)).toStrictEqual(['1->2->3', '1->4', '1->6']);
	});
});

describe('permutations', () => {
	it('abc', () => {
		expect(permutations('abc')).toStrictEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
	});
})
