export function reverseString(str: string): string {
	const array = str.split('');
	for (let i = 0; i < Math.ceil(array.length / 2); i++) {
		const temp = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = temp;
	}

	return array.join('');
}

function reverseBits(n: number): number {
	let string = (n>>>0).toString(2).padStart(32, '0');
	return parseInt(reverseString(string), 2);
}

export default reverseBits;
