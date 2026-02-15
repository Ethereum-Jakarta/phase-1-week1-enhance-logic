class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addNode(node) {
    this.adjList.set(node, []);
  }

  addEdge(node1, node2) {
    this.adjList.get(node1).push(node2);
  }

  bfs(startNode) {
    const visited = new Set();
    const queue = [];

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode);

      for (const neighbor of this.adjList.get(currentNode)) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("BFS Traversal:");
graph.bfs("A");
