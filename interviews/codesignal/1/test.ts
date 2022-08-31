import solution from './index';

// test('in-memory DB', () => {
// 	const queries = [
// 		["SET_OR_INC", "A", "B", "5"],
// 		["SET_OR_INC", "A", "B", "6"],
// 		["GET", "A", "B"],
// 		["GET", "A", "C"],
// 		["DELETE", "A", "B"],
// 		["DELETE", "A", "C"]
// 	];
// 	const output = ["5", "11", "11", "", "true", "false"];
//
// 	expect(solution(queries)).toStrictEqual(output);
// });
//
// test('in-memory DB', () => {
// 	const queries = [
// 		["SET_OR_INC", "A", "B", "4"],
// 		["SET_OR_INC", "A", "C", "7"],
// 		["SET_OR_INC", "B", "D", "11"],
// 		["SET_OR_INC", "C", "E", "13"],
// 		["GET_VALUES_STAT"],
// 		["TOP_SIZE", "2"]
// 	];
// 	const output = ["4", "7", "11", "13", "[4, 8.75, 13]", "[C, A]"];
//
// 	expect(solution(queries)).toStrictEqual(output);
// });

test('in-memory DB', () => {
const queries = [
	["SET_OR_INC", "A", "B", "4"],                      // returns "4"; database state: {"A": {"B": 4}}
	["LOCK", "user1", "A"],                             // returns "acquired"
	["LOCK", "user2", "A"],                             // returns "wait"
	["LOCK", "user3", "B"],                             // returns "invalid_request"; the record "B" does not exist in database, so the operation is invalid
	["UNLOCK", "B"],                                    // returns ""; the record "B" does not exist in database, so the operation is invalid
	["SET_OR_INC", "A", "C", "5"],                      // returns ""; the record is locked by user1, so it can't be modified via "SET_OR_INC" operation
	["DELETE", "A", "B"],                               // returns "false"; the record is locked by user1, so it can't be deleted via "DELETE" operation
	["SET_OR_INC_BY_CALLER", "A", "B", "3", "user2"],   // returns ""; the operation is ignored as "A" is locked by user1
	["GET", "A", "B"],                                  // returns "4"
	["DELETE_BY_CALLER", "A", "B", "user3"],            // returns "false"; user3 does not own a lock for "A"
	["SET_OR_INC_BY_CALLER", "A", "B", "5", "user1"],   // returns "9"; database state: {"A": {"B": 9}}
	["UNLOCK", "A"],                                    // returns "released"; user2 acquires the lock for "A"
	//   since they were waiting in the queue
	["SET_OR_INC_BY_CALLER", "A", "B", "2", "user1"],   // returns ""; the operation is ignored as "A" is locked by user2
	["SET_OR_INC_BY_CALLER", "A", "B", "1", "user2"]    // returns "10"; database state: {"A": {"B": 10}}
];
	const output = ["4", "acquired", "wait", "", "4", "false", "9", "released", "", "10"];

	expect(solution(queries)).toStrictEqual(output);
});
