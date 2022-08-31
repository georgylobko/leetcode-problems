export function isPalindrome(s: string, l: number, r: number) {
	while (l < r) {
		if (s[l] !== s[r]) {
			return false;
		}

		l++;
		r--;
	}

	return true;
}

function partition(s: string): string[][] {
	const result = [];
	let current = [];

	const dfs = (i: number) => {
		if (i >= s.length) {
			result.push(current);
			current = [];
			return;
		}

		for (let j = i; j < s.length; j++) {
			if (isPalindrome(s, i, j)) {
				current.push(s.slice(i, j+1));
				dfs(j+1);
				current.pop();
			}
		}
	}

	dfs(0);

	return result;
}

export default partition;
