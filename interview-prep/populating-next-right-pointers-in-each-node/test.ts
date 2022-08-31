import connect, { Node } from './index';

describe('connect', () => {
	const one = new Node(1);
	const two = new Node(2);
	const three = new Node(3);
	const four = new Node(4);
	const five = new Node(5);
	const six = new Node(6);
	const seven = new Node(7);

	one.left = two;
	two.left = four;
	two.right = five;
	one.right = three;
	three.left = six;
	three.right = seven;

	it('connect', () => {
		connect(one);
	})
})
