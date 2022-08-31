//  Дана строка, состоящая из букв A-Z:
// "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
//  Нужно написать функцию RLE, которая на выходе даст строку вида:
//  "A4B3C2XYZD4E3F3A6B28"
//  1. если символ встречается 1 раз, он остается без изменений
//  2. если символ повторяется более 1 раза, к нему добавляется количество повторений

const rle = (str: string) => {
	let counter = 1;
	return str.split('').reduce((acc, current, index) => {
		if (!acc) {
			return current;
		}

		if (acc[acc.length - 1] === current) {
			counter = counter + 1;

			if (str.length - 1 === index) {
				return `${acc}${counter}`;
			}

			if (str.length - 1 === index && counter > 1) {
				return `${acc}${current}`;
			}

			return acc;
		} else {
			const result = (counter > 1 && current) ? `${acc}${counter}${current}` : `${acc}${current}`;

			counter = 1;
			return result;
		}
	}, '');
};

export default rle;
