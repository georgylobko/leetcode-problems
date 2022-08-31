function intToRoman(num: number): string {
	if (num < 1 || num > 3999) {
		return '';
	}

	const integerToSymbol = {
		1: 'I',
		5: 'V',
		10: 'X',
		50: 'L',
		100: 'C',
		500: 'D',
		1000: 'M',
		4: 'IV',
		9: 'IX',
		40: 'XL',
		90: 'XC',
		400: 'CD',
		900: 'CM',
	};

	if (num in integerToSymbol) {
		return integerToSymbol[num];
	}

	if (num <= 3) {
		return Array(num).fill(integerToSymbol[1]).join('');
	}

	if (num <= 8) {
		return `${integerToSymbol[5]}${intToRoman(num - 5)}`;
	}

	if (num < 100 && num % 10 === 0 && !integerToSymbol[num]) {
		if (Array(num / 10).length >= 5) {
			return `${integerToSymbol[50]}${intToRoman(num % 50)}`;
		}

		return Array(num / 10).fill(integerToSymbol[10]).join('');
	}

	if (num >= 200 && num < 900 && num % 100 === 0 && !integerToSymbol[num]) {
		if (Array(num / 100).length >= 5) {
			return `${integerToSymbol[500]}${intToRoman(num % 500)}`;
		}

		return Array(num / 100).fill(integerToSymbol[100]).join('');
	}

	if (num >= 2000 && num % 1000 === 0 && !integerToSymbol[num]) {
		return Array(num / 1000).fill(integerToSymbol[1000]).join('');
	}

	return String(num).split('').map((digit: string, index: number, array) => {
		switch (`${array.length}-${index}`) {
			case '4-0':
				return parseInt(digit) * 1000;
			case '4-1':
			case '3-0':
				return parseInt(digit) * 100;
			case '4-2':
			case '3-1':
			case '2-0':
				return parseInt(digit) * 10;
			case '4-3':
			case '3-2':
			case '2-1':
			case '1-0':
				return parseInt(digit);
		}
	}).map((rank) => intToRoman(rank)).join('');
}

export default intToRoman;
