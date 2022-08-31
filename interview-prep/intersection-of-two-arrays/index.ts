function intersect(nums1: number[], nums2: number[]): number[] {
	let result = [];

	let obj1 = {};
	for (let i = 0; i < nums1.length; i++) {
		if (obj1[nums1[i]]) {
			obj1[nums1[i]] = obj1[nums1[i]] + 1;
		} else {
			obj1[nums1[i]] = 1;
		}
	}

	let obj2 = {};
	for (let i = 0; i < nums2.length; i++) {
		if (obj2[nums2[i]]) {
			obj2[nums2[i]] = obj2[nums2[i]] + 1;
		} else {
			obj2[nums2[i]] = 1;
		}
	}

	for (let key in obj1) {
		if (obj2[key]) {
			const entries = Math.min(obj1[key], obj2[key]);
			if (entries === 1) {
				result.push(Number(key));
			} else {
				result = result.concat(new Array(entries).fill(key).map(Number));
			}
		}
	}

	return result;
}

export default intersect;
