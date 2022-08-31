function isPowerOfThree(n: number): boolean {
	if (n === 1) return true;
	if (n < 3) return false;

	while (n >= 3) {
		n = n / 3;
	}

	return n === 1;
}

export default isPowerOfThree;
