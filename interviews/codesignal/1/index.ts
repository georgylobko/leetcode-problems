function solution(queries: string[][]): string[] {
	let data = {};
	let lockedFields = {};
	let queueForLock = [];

	function flatten(arr) {
		return arr.reduce(function (flat, toFlatten) {
			return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		}, []);
	}

	const processQuery = (operator: string, args: string[]): string => {
		const [key, valueKey, value] = args;
		switch (operator) {
			case 'SET_OR_INC': {
				if (data.hasOwnProperty(key) && data[key].hasOwnProperty(valueKey)) {
					data = {
						...data,
						[key]: {
							...data[key],
							[valueKey]: data[key][valueKey] + +value
						}
					}
				} else if (data.hasOwnProperty(key)) {
					data = {
						...data,
						[key]: {
							...data[key],
							[valueKey]: +value
						}
					}
				} else {
					data = {
						...data,
						[key]: {
							[valueKey]: +value
						}
					}
				}

				return data[key][valueKey] + '';
			}

			case 'GET':
				if (data.hasOwnProperty(key) && data[key].hasOwnProperty(valueKey)) {
					return data[key][valueKey] + '';
				} else {
					return '';
				}

			case 'DELETE':
				if (data.hasOwnProperty(key) && data[key]?.hasOwnProperty(valueKey)) {
					data = {
						...data,
						[key]: undefined
					}

					delete data[key];

					return 'true';
				} else {
					return 'false';
				}

			case 'GET_VALUES_STAT': {
				const valuesArray: Array<number> = flatten(Object.values(data).map((item) => {
					return Object.values(item).map((i) => +i);
				}));

				const min = Math.min(...valuesArray);
				const average = (valuesArray.reduce((a,b) => a + b, 0) / valuesArray.length).toFixed(2);
				const max = Math.max(...valuesArray);
				return `[${min}, ${average}, ${max}]`;
			}

			case 'TOP_SIZE': {
				// hasn't implemented yet
				const count = +key;
				for (let objKey in data) {
					console.log(objKey, data[objKey]);
				}
				const array = Object.values(data).filter(item => {
					return true;
				});
				break;
			}

			case 'LOCK': {
				const [userId, key] = args;
				if (!data[key]) {
					return 'invalid_request';
				}

				const queueRequest = queueForLock.find((queueItem) => queueItem.userId === userId);
				if (queueRequest) {
					return '';
				}

				if (lockedFields[key]) {
					queueForLock.push({ key, userId });
					return 'wait';
				}

				lockedFields = {
					[key]: userId
				};

				return 'acquired';
			}

			case 'UNLOCK': {
				const [key] = args;
				if (!data[key]) {
					return 'invalid_request';
				} else {
					delete lockedFields[key];
					const lockItem = queueForLock.pop();
					if (lockItem) {
						lockedFields = {
							[lockItem.key]: lockItem.userId
						};
					}
				}

				return 'released';
			}

			case 'SET_OR_INC_BY_CALLER': {

			}

		}

		return operator;
	}

	return queries.map((item) => {
		return processQuery(item[0], item.slice(1));
	})
}


export default solution;
