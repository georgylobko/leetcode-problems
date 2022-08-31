const intToBinary = (n: number): string => '0'.repeat(32).substr(n.toString(2).length) + n.toString(2);

function hammingDistance(x: number, y: number): number {
	let distance = 0;
	const bX = intToBinary(x).split('');
	const bY = intToBinary(y).split('');

	for (let i = 0; i < bX.length; i++) {
		if (bX[i] !== bY[i]) {
			distance++;
		}
	}

	return distance;
}

export default hammingDistance;
