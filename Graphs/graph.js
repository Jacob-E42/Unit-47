class Node {
	constructor(value, adjacent = new Set()) {
		this.value = value;
		this.adjacent = adjacent;
	}
}

class Graph {
	constructor() {
		this.nodes = new Set();
	}

	// this function accepts a Node instance and adds it to the nodes property on the graph
	addVertex(vertex) {
		this.nodes.add(vertex);
	}

	// this function accepts an array of Node instances and adds them to the nodes property on the graph
	addVertices(vertexArray) {
		for (let vertex of vertexArray) {
			this.nodes.add(vertex);
		}
	}

	// this function accepts two vertices and updates their adjacent values to include the other vertex
	addEdge(v1, v2) {
		if (v1 && v2) {
			v1.adjacent.add(v2);
			v2.adjacent.add(v1);
		}
	}

	// this function accepts two vertices and updates their adjacent values to remove the other vertex
	removeEdge(v1, v2) {
		if (v1 && v2) {
			v1.adjacent.delete(v2);
			v2.adjacent.delete(v1);
		}
	}

	// this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
	removeVertex(vertex) {
		if (vertex) {
			this.nodes.delete(vertex);
		}
	}

	// this function returns an array of Node values using DFS
	depthFirstSearch(start) {
		const toVisitStack = [start];
		const visited = new Set(toVisitStack);
		const result = [];
		while (toVisitStack.length) {
			let currVertex = toVisitStack.pop();
			result.push(currVertex.value);

			for (let vertex of currVertex.adjacent) {
				if (!visited.has(vertex)) {
					toVisitStack.push(vertex);
					visited.add(vertex);
				}
			}
		}

		return result;
	}

	// this function returns an array of Node values using BFS
	breadthFirstSearch(start) {
		const toVisitQueue = [start];
		const visited = new Set(toVisitQueue);
		const result = [];
		while (toVisitQueue.length) {
			let currVertex = toVisitQueue.shift();
			result.push(currVertex.value);
			for (let vertex of currVertex.adjacent) {
				if (!visited.has(vertex)) {
					visited.add(vertex);
					toVisitQueue.push(vertex);
				}
			}
		}
		return result;
	}
}

module.exports = { Graph, Node };
