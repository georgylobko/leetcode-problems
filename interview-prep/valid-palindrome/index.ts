function escapeNonAlphanumericChars(s: string) {
	return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function isPalindrome(s: string): boolean {
	return escapeNonAlphanumericChars(s) === escapeNonAlphanumericChars(s).split('').reverse().join('');
}

export default isPalindrome;
