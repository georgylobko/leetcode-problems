import versionSort from './index';

describe("versionSort", () => {
	it("should work on example 0", () => {
		const nums = ["4.2.3", "2.5", "2.50.1", "2.50", "5", "2.b"];
		const expected = ["2.5", "2.b", "2.50", "2.50.1", "4.2.3", "5"];
		expect(versionSort(nums)).toEqual(expected);
	});

	it("should work on example 1", () => {
		const nums = ["4.20.3.1", "4.20.3", "4.a.3.1"];
		const expected = ["4.a.3.1", "4.20.3", "4.20.3.1"];
		expect(versionSort(nums)).toEqual(expected);
	});

	it("should work on example 2", () => {
		const nums = ["4.2.3.1", "4.2.4"];
		const expected = ["4.2.3.1", "4.2.4"];
		expect(versionSort(nums)).toEqual(expected);
	});

	it("should work on example 3", () => {
		const nums = ["4.2.3", "4.2.3"];
		const expected = ["4.2.3", "4.2.3"];
		expect(versionSort(nums)).toEqual(expected);
	});

	it("should work on example 4", () => {
		const nums = ["5.5.1", "4.21.0", "6.1.0", "5.1.0", "4.22.0", "4.21"];
		const expected = ["4.21", "4.21.0", "4.22.0", "5.1.0", "5.5.1", "6.1.0"];
		expect(versionSort(nums)).toEqual(expected);
	});

	it("should work on example 5", () => {
		const nums = ["5.10", "5.a.1c", "5.a.1b"];
		const expected = ["5.a.1b", "5.a.1c", "5.10"];
		expect(versionSort(nums)).toEqual(expected);
	});
});
