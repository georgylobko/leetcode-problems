function addBinary(a: string, b: string): string {
	const aArray = a.split('');
	const bArray = b.split('');
	let remainder = '0';
	let result = '';

	const rules = {
		'0+0': '0',
		'0+1': '1',
		'1+0': '1',
		'1+1': '10'
	};

	if (aArray.length === 1 && bArray.length === 1) {
		return rules[`${a}+${b}`];
	}

	while (aArray.length || bArray.length) {
		if (aArray.length && bArray.length) {
			const currentSum = rules[`${aArray.pop()}+${bArray.pop()}`];

			if (currentSum === '10') {
				result = remainder + result;
				remainder = '1';
			} else if (currentSum === '1' && remainder === '1') {
				result = '0' + result;
			} else if (currentSum === '1') {
				result = currentSum + result;
			} else {
				result = remainder + result;
				remainder = '0'
			}
		} else {
			let currentElement;
			if (aArray.length) {
				currentElement = aArray.pop();
			} else {
				currentElement = bArray.pop();
			}

			const currentSum = rules[`${remainder}+${currentElement}`];

			if (currentSum === '10') {
				result = '0' + result;
				remainder = '1';
			} else {
				result = currentSum + result;
				remainder = '0';
			}
		}
	}

	if (remainder === '1') {
		result = remainder + result;
	}

	return result;
}

export default addBinary;
