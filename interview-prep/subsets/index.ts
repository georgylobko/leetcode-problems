function subsets(nums: number[]): number[][] {
	let result = [];
	const n = nums.length;

	const dec2bin = (dec: number) => (dec >>> 0).toString(2);

	for (let i = Math.pow(2, n); i < Math.pow(2, n + 1); i++) {
		const binaryArray = dec2bin(i).split('').slice(1);
		const curr = [];
		for (let j = 0; j < n; j++) {
			if (binaryArray[j] === '1') curr.push(nums[j]);
		}
		result.push(curr);
	}

	return result;
}

export default subsets;
