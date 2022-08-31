export default class Solution {
	original: number[];

	constructor(nums: number[]) {
		this.original = nums;
	}

	public reset(): number[] {
		return this.original;
	}

	public shuffle(): number[] {
		const shuffled = this.original.slice(0);
		let n = shuffled.length;

		for (let i = 0; i < this.original.length; ++i) {
			const newPos = Math.floor(Math.random() * (i + 1));
			let tmp = shuffled[i];
			shuffled[i] = shuffled[newPos];
			shuffled[newPos] = tmp;
		}

		return shuffled;
	}
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
