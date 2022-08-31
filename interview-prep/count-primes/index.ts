function countPrimes(n: number): number {
	let count = 0;

	const primes = new Array(n).fill(true);

	for (let i = 2; i * i < n; i++) {
		if (primes[i]) {
			for (let j = i * i; j < n; j += i) {
				primes[j] = false;
			}
		}
	}

	for (let i = 2; i < primes.length; i++) {
		if (primes[i]) count++;
	}

	return count;
}

export default countPrimes;
