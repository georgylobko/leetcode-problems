import isPalindrome, { ListNode } from './index';

const transformArrayToLinkedList = (array: Array<number>): ListNode => {
	if (!array.length) {
		return null;
	}

	const arrayCopy = [...array].reverse();
	return arrayCopy.reduce<ListNode>((acc, val) => new ListNode(val, acc), null);
}

test('isPalindrome [1,2,2,1]', () => {
	const input = transformArrayToLinkedList([1,2,2,1]);

	expect(isPalindrome(input)).toBe(true);
});

test('isPalindrome [1,2]', () => {
	const input = transformArrayToLinkedList([1,2]);

	expect(isPalindrome(input)).toBe(false);
});
