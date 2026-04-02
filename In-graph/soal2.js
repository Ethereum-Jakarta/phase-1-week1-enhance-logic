class Node {
  constructor(value) {
    this.value = value;
    this.edges = new Set();
  }

  addEdge(node) {
    this.edges.add(node);
  }

  removeEdge(node) {
    this.edges.delete(node);
  }
}

class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addNode(value) {
    this.nodes.set(value, new Node(value));
  }

  addEdge(source, destination) {
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      throw new Error("Source or destination node does not exist.");
    }
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    sourceNode.addEdge(destinationNode);
  }   

  removeNode(value) {
    const nodeToRemove = this.nodes.get(value);
    if (!nodeToRemove) return;

    for (const node of this.nodes.values()) {
      node.removeEdge(nodeToRemove);
    }

    this.nodes.delete(value);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);
    if (!sourceNode || !destinationNode) return;

    sourceNode.removeEdge(destinationNode);
  }

  dfs(node, visited) {
    if (!node || visited.has(node)) return;
    visited.add(node);

    for (const neighbor of node.edges) {
      this.dfs(neighbor, visited);
    }
  }

  countIslands(grid) {
    const graph = new Graph();
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1) {
          const nodeKey = `${r},${c}`;
          graph.addNode(nodeKey);

          if (r > 0 && grid[r - 1][c] === 1) {
            graph.addEdge(nodeKey, `${r - 1},${c}`);
            graph.addEdge(`${r - 1},${c}`, nodeKey);
          }
          if (c > 0 && grid[r][c - 1] === 1) {
            graph.addEdge(nodeKey, `${r},${c - 1}`);
            graph.addEdge(`${r},${c - 1}`, nodeKey);
          }
        }
      }
    }

    let count = 0;
    const visited = new Set();

    for (const node of graph.nodes.values()) {
      if (!visited.has(node)) {
        count++;
        this.dfs(node, visited);
      }
    }

    return count;
  }
}

function islandCount(grid) {
  const graph = new Graph();
  return graph.countIslands(grid);
}


console.log(islandCount([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
])); // Expected Output: 1

// Testcase 2
console.log(islandCount([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
])); // Expected Output: 3

// Testcase 3
console.log(islandCount([
  [1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 1, 1]
])); // Expected Output: 5