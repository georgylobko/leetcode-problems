export function twoSum(nums: number[], target: number, start: number): number[][] {
	const result = [];
	let lo = start;
	let hi = nums.length - 1;

	while (lo < hi) {
		const sum = nums[lo] + nums[hi];

		if (sum > target) {
			hi--;
		} else if (sum < target) {
			lo++;
		} else {
			result.push([nums[lo], nums[hi]]);
			lo++;
			hi--;

			while (lo < hi && nums[lo - 1] === nums[lo]) {
				lo++;
			}
		}
	}

	return result;
}

function kSum(nums: number[], target: number, start: number, k: number): number[][] {
	let result = [];

	if (k === 2) {
		return twoSum(nums, target, start);
	}

	for (let i = start; i < nums.length; i++) {
		if (i === start || nums[i - 1] !== nums[i]) {
			kSum(nums, target - nums[i], i + 1, k - 1).forEach((subset) => {
				result.push([nums[i], ...subset]);
			})
		}
	}

	return result;
}

function fourSum(nums: number[], target: number): number[][] {
	nums.sort((a, b) => a - b);

	return kSum(nums, target, 0, 4);
}

export default fourSum;
