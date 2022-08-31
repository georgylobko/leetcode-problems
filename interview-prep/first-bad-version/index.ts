const solution = function(isBadVersion: any) {

	return function(n: number): number {
		let left = 0;
		let right = n;

		while (left <= right) {
			let mid = Math.floor((left + right) / 2);

			if (isBadVersion(mid) !== isBadVersion(mid + 1)) {
				return mid + 1;
			} else if (!isBadVersion(mid)) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	};
};

export default solution;
