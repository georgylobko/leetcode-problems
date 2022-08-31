function myAtoi(s: string): number {
	const range = [Math.pow(-2, 31), Math.pow(2, 31) - 1];
	let k = 1;
	let ignoreSubsequent = false;
	let ignoreNext = false;

	const str = s.trim().split('').filter((char, index) => {
		if (index === 0 && ['+', '-'].includes(char)) {
			if (char === '-') k = -1;
			return false;
		}

		if (ignoreSubsequent) {
			return false;
		}

		if (!/[0-9]/.test(char)) {
			ignoreSubsequent = true;
			return false;
		}

		return true;
	}).join('');

	let num = Number(str) * k;

	if (num < range[0]) return range[0];
	if (num > range[1]) return range[1];

	return num;
}

export default myAtoi;
