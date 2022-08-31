function canFinish(numCourses: number, prerequisites: number[][]): boolean {
	const graph = new Map();
	const visited = new Set();

	for (let i = 0; i < prerequisites.length; i++) {
		const [course, prerequisite] = prerequisites[i];

		if (graph.has(course)) {
			graph.get(course).push(prerequisite);
		} else {
			graph.set(course, [prerequisite]);
		}
	}

	const dfs = (course: number) => {
		if (visited.has(course)) return false;
		if (!graph.has(course)) return true;

		visited.add(course);
		for (const prerequisite of graph.get(course)) {
			if (!dfs(prerequisite)) return false;
		}
		visited.delete(course);
		graph.delete(course);

		return true;
	}

	for (let course = 0; course < numCourses; course++) {
		if (!dfs(course)) return false;
	}

	return true;
}

export default canFinish;
