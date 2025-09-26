class Graph {
    constructor() {
        this.nodes = new Map();
    }
    
    addNode(value) {
        if (!this.nodes.has(value)) {
            this.nodes.set(value, new Node(value));
        }
    }

    addEdge(source, destination) {
        if (!this.nodes.has(source) || !this.nodes.has(destination)) {
            throw new Error('Source or destination node does not exist.');
        }
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);
        sourceNode.addEdge(destinationNode);
        destinationNode.addEdge(sourceNode);
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }

    addEdge(node) {
        this.edges.push(node)
    }
}

function islandCount(grid) {
    const graph = new Graph();
    const rows = grid.length;
    const cols = grid[0].length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                const key = `${r},${c}`;
                graph.addNode(key);
            }
        }
    }
    
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                const key = `${r},${c}`;
                for (let [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] === 1) {
                        graph.addEdge(key, `${nr},${nc}`);
                    }
                }
            }
        }
    }

    const visited = new Set();
    let count = 0;

    function dfs(node) {
        visited.add(node.value);
        for (let neighbor of node.edges) {
            if (!visited.has(neighbor.value)) {
                dfs(neighbor);
            }
        }
    }

    for (let node of graph.nodes.values()) {
        if (!visited.has(node.value)) {
            count++;
            dfs(node);
        }
    }

    return count;
}

// Testcase 1
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

// Testcase 4
console.log(islandCount([
  [1, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
])); // Expected Output: 4

// Testcase 5
console.log(islandCount([
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
])); // Expected Output: 6

// Testcase 6
console.log(islandCount([
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 0]
])); // Expected Output: 2

// Testcase 7
console.log(islandCount([
  [1, 1, 1],
  [0, 0, 0],
  [1, 0, 1]
])); // Expected Output: 3