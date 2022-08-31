function plusOne(digits: number[]): number[] {
	digits.reverse();

	if (digits[0] !== 9) {
		digits[0] += 1;
	} else {
		let remainder = 0;

		for (let i = 0; i < digits.length; i++) {
			if (i === 0) {
				digits[i] = 0;
				remainder += 1;
			}

			if (i !== 0 && remainder) {
				if (digits[i] !== 9) {
					digits[i] += remainder;
					remainder = 0;
				} else {
					digits[i] = 0;
				}
			}
		}

		if (digits[digits.length - 1] === 0) {
			digits.push(remainder);
		}
	}

	digits.reverse();

	return digits;
}

export default plusOne;
