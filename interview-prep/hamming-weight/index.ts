function hammingWeight(n: number): number {
	let counter = 0;

	n.toString(2).split('').forEach((i) => {
		if (i === '1') {
			counter++;
		}
	});

	return counter;
}

export default hammingWeight;
