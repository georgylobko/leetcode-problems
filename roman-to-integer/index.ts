function romanToInt(str: string): number {
	if (!str) {
		return 0;
	}

	const symbolToInteger = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
		'IV': 4,
		'IX': 9,
		'XL': 40,
		'XC': 90,
		'CD': 400,
		'CM': 900
	};

	const doubleSymbolsDictionary = Object.keys(symbolToInteger).filter((symbol) => symbol.length === 2).join('|');
	const doubleSymbols = str.match(new RegExp(`(${doubleSymbolsDictionary})`, 'g')) || [];

	if (!doubleSymbols.length) {
		return str.split('').map((symbol) => {
			return symbolToInteger[symbol];
		}).reduce((acc, curr) => acc + curr, 0);
	}

	doubleSymbols.forEach((doubleSymbol) => {
		str = str.replace(doubleSymbol, `|${doubleSymbol}|`);
	});

	return str.split('|').filter((symbol) => Boolean(symbol)).map((symbol) => {
		if (symbolToInteger[symbol]) {
			return symbolToInteger[symbol];
		}

		return romanToInt(symbol);
	}).reduce((acc, curr) => acc + curr, 0);
}

export default romanToInt;
