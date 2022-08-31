import { addNode, addEdge, adjacencyList, bfs, dfs } from './index';

test('create the graph', () => {
	const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
	const routes = [
		['PHX', 'LAX'],
		['PHX', 'JFK'],
		['JFK', 'OKC'],
		['JFK', 'HEL'],
		['JFK', 'LOS'],
		['MEX', 'LAX'],
		['MEX', 'BKK'],
		['MEX', 'LIM'],
		['MEX', 'EZE'],
		['LIM', 'BKK']
	];

	airports.forEach(addNode);
	routes.forEach((route) => addEdge(route[0], route[1]))
	dfs('PHX');
});
