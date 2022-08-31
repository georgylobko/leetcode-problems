function isPalindrome(x: number): boolean {
	return String(x).split('').reverse().join('') === String(x).split('').join('');
}

export default isPalindrome;
