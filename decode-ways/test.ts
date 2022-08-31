import numDecodings from './index';

describe('numDecodings', () => {
	it('18', () => {
		expect(numDecodings('18')).toBe(2);
	});

	it('123', () => {
		expect(numDecodings('123')).toBe(3);
	});
})
