function funWithAnagrams(text: string[]): string[] {
	const checkAnagram = (w1: string, w2: string) => {
		return w1.split('').sort().join() === w2.split('').sort().join();
	};

	const result = text.filter((item, index) => {
		if (index === 0) {
			return true;
		}

		return !text.slice(0, index).some(i => checkAnagram(i, item));
	});

	result.sort();

	return result;
}

export default funWithAnagrams;
