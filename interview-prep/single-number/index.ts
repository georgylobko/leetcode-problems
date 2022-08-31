function singleNumber(nums: number[]): number {
	let obj = {};

	for (let i = 0; i < nums.length; i++) {
		if (obj[nums[i]]) {
			obj[nums[i]] = ++obj[nums[i]];
		} else {
			obj[nums[i]] = 1;
		}
	}

	return Number(Object.entries(obj).find((item) => item[1] === 1)[0]);
}

export default singleNumber;
