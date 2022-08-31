import MinStack from './index';

describe('MinStack', () => {
	it('MinStack', () => {
		const stack = new MinStack();
		stack.push(-2);
		stack.push(0);
		stack.push(-3);
		stack.getMin();
		stack.pop();
		console.log(stack);
		// stack.top();
		// stack.getMin();
	})
})
