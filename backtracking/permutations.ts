const permutations = (string: string): Array<string> | string => {
	if (string.length === 1) {
		return string;
	}

	let permutationsArray = [];

	for (let i = 0; i < string.length; i++){
		let char = string[i];
		let remainingChars = string.slice(0, i) + string.slice(i + 1);

		for (let permutation of permutations(remainingChars)){
			permutationsArray.push(char + permutation) }
	}

	return permutationsArray
}

export default permutations;
