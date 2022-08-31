import nameLister from './index';

test('nameLister', () => {
	expect(nameLister(['Kyle'])).toBe('Kyle');
});

test('nameLister', () => {
	expect(nameLister(['Kyle', 'John'])).toBe('Kyle, John');
});

test('nameLister', () => {
	expect(nameLister(['Kyle', 'John', 'Maria', 'Anna'], 'and')).toBe('Kyle, John, Maria, and Anna');
});

test('nameLister', () => {
	expect(nameLister(['Kyle', 'John', 'Maria', 'Anna'], '')).toBe('Kyle, John, Maria, Anna');
});

test('nameLister', () => {
	expect(nameLister(['Kyle', 'John'], 'and')).toBe('Kyle and John');
});
