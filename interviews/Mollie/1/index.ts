function nameLister(names, lastSeparator = '') {
	if (names.length === 1) {
		return names[0];
	}

	if (names.length === 2 && lastSeparator) {
		return names.join(` ${lastSeparator} `);
	}

	if (lastSeparator) {
		for (let i = 0; i < names.length; i++) {
			if (i === names.length - 2) {
				names[i] = `${names[i]}, ${lastSeparator}`;
			} else if (i !== names.length - 1) {
				names[i] = `${names[i]},`;
			}
		}
	}

	if (!lastSeparator) {
		return names.join(', ');
	}

	return names.join(' ');
}

export default nameLister;
