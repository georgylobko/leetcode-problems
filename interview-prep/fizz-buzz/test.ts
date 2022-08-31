import fizzBuzz from './index';

describe('fizzBuzzfizzBuzz', () => {
	it('fizzBuzz', () => {
		expect(fizzBuzz(3)).toStrictEqual(["1","2","Fizz"]);
	});

	it('fizzBuzz', () => {
		expect(fizzBuzz(5)).toStrictEqual(["1","2","Fizz","4","Buzz"]);
	});

	it('fizzBuzz', () => {
		expect(fizzBuzz(15)).toStrictEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
	});
})
