const versionSort = (versionNums: string[]): string[] => {
	const hexToDecimal = (hex: string): Array<string> => {
		return hex.split('.').map((hexNum) => String.fromCharCode(parseInt(hexNum, 16)));
	};

	const compareFn = (a: string, b: string) => {
		return hexToDecimal(a) > hexToDecimal(b) ? 1 : -1
	};

	return versionNums.sort(compareFn);
};

export default versionSort;
