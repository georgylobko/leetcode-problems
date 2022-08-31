function removeElement(nums: any[], val: number): number {
	let result = 0;
	nums.forEach((num) => {
		if (num !== val) {
			nums[result] = num;
			result++;
		}
	});

	return result;
}

export default removeElement;
