function countAndSay(n: number): string {
	if (n === 1) {
		return '1';
	}

	if (n === 2) {
		return '11';
	}

	const res = countAndSay(n - 1);
	const array = res.split('');
	let counter = 0;
	let prev = null;
	let string = '';

	for (let i = 0; i < array.length; i++) {
		if (!counter) {
			counter++;
		}

		if (prev && array[i] !== prev) {
			string += `${counter}${prev}`;
			counter = 1;
		}

		if (prev && array[i] === prev) {
			counter++
		}

		if (i === array.length - 1) {
			string += `${counter}${array[i]}`;
		}

		prev = array[i];
	}

	return string;
}

export default countAndSay;
