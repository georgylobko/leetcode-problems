export default class MinStack {
	minValue: number = Infinity;
	array: Array<number> = [];

	constructor() {

	}

	push(val: number): void {
		this.minValue = Math.min(val, this.minValue);

		this.array.push(val);
	}

	pop(): void {
		if (this.top() === this.minValue) {
			this.array.pop();
			this.minValue = Math.min(...this.array);
		} else {
			this.array.pop();
		}
	}

	top(): number {
		if (this.array.length === 0) {
			return null;
		}

		return this.array[this.array.length - 1];
	}

	getMin(): number {
		return this.minValue;
	}
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
