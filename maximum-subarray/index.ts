function maxSubArray(nums: number[]): number {
	let max = -Infinity;
	let temp = 0;

	nums.forEach((num) => {
		temp = Math.max(num, temp + num);
		max = temp > max ? temp : max;
	});

	return max;
}

export default maxSubArray;
