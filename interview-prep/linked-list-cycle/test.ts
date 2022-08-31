import hasCycle, { ListNode } from './index';

test('hasCycle', () => {
	const head = new ListNode(3);
	const two = new ListNode(2);
	const zero = new ListNode(0);
	const minusFour = new ListNode(-4);
	minusFour.next = two;
	zero.next = minusFour;
	two.next = zero;
	head.next = two;

	expect(hasCycle(head)).toBe(true);
});
