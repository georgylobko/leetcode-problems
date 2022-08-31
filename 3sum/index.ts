// function threeSum(nums: number[]): number[][] {
// 	let res = [];
// 	nums.sort((a, b) => a - b);
//
// 	function twoSum2(i) {
// 		let lo = i + 1;
// 		let hi = nums.length - 1;
//
// 		while (lo < hi) {
// 			const sum = nums[i] + nums[lo] + nums[hi];
// 			if (sum < 0) {
// 				lo++;
// 			} else if (sum > 0) {
// 				hi--;
// 			} else {
// 				res.push([nums[i], nums[lo], nums[hi]]);
// 				lo++;
// 				hi--;
//
// 				while (lo < hi && nums[lo - 1] === nums[lo]) {
// 					lo++;
// 				}
// 			}
// 		}
// 	}
//
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] > 0) break;
// 		if (i === 0 || nums[i-1] !== nums[i]) {
// 			twoSum2(i);
// 		}
// 	}
//
// 	return res;
// }

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

function threeSum(nums: number[]): number[][] {
	nums.sort((a, b) => a - b);

	return kSum(nums, 0, 0, 3);
}

export default threeSum;
