// the graph
export const adjacencyList = new Map();

// add node
export function addNode(airport: string) {
	adjacencyList.set(airport, []);
}

// add edge, undirected
export function addEdge(origin: string, destination: string) {
	adjacencyList.get(origin).push(destination);
	adjacencyList.get(destination).push(origin);
}

export function bfs(start: string) {
	const visited = new Set();

	const queue = [start];

	while (queue.length) {
		const airport = queue.shift();

		const destinations = adjacencyList.get(airport);

		for (const destination of destinations) {
			if (destination === 'BKK') {
				console.log('found it!');
			}

			if (!visited.has(destination)) {
				visited.add(destination);
				queue.push(destination);
				console.log(destination);
			}
		}
	}
}

export function dfs(start: string, visited = new Set()) {
	console.log(start);
	visited.add(start);
	const destinations = adjacencyList.get(start);

	for (const destination of destinations) {
		if (destination === 'BKK') {
			console.log('DFS found Bangkok in steps');
			return;
		}

		if (!visited.has(destination)) {
			dfs(destination, visited);
		}
	}
}
