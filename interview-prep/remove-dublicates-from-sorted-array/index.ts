function removeDuplicates(nums: any[]): number {
	let uniquePointer = 0;

	for (let i = 0; i < nums.length; i++) {
		if (i === 0) {
			continue;
		}

		if (nums[i-1] === nums[i]) {

		} else {
			uniquePointer++;
			nums[uniquePointer] = nums[i];
		}
	}

	for (let i = uniquePointer + 1; i < nums.length; i++) {
		nums[i] = '_';
	}

	return uniquePointer + 1;
}

export default removeDuplicates;
