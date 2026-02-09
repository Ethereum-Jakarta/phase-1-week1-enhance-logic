class Graph {
  constructor() {
    this.islandList = {};
  }

  addNode(key) {
    if (!this.islandList[key]) this.islandList[key] = [];
  }

  addEdge(a, b) {
    if (!this.islandList[b]) this.islandList[b] = []
    this.islandList[a].push(b);
    this.islandList[b].push(a);
  }

  dfs(start, visited) {
    if (visited.has(start)) return;
    visited.add(start);
    for (const n of this.islandList[start]) {
      this.dfs(n, visited);
    }
  }
}

function islandCount(grid) {
  const graph = new Graph();
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        const currentNode = `${r},${c}`;
        graph.addNode(currentNode);

        //cek bawah
        if (r + 1 < rows && grid[r + 1][c] === 1) {
          const neighborNode = `${r + 1},${c}`;
          graph.addEdge(currentNode, neighborNode);
        }
        // cek kanan
        if (c + 1 < cols && grid[r][c + 1] === 1) {
          const neighborNode = `${r},${c + 1}`;
          graph.addEdge(currentNode, neighborNode);
        }
      }
    }
  }

  const visited = new Set();
  let count = 0;

  for (const node in graph.islandList) {
    if (!visited.has(node)) {
      graph.dfs(node, visited);
      count++; 
    }
  }

  return count;
}

// Testcase 1
console.log(
  islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ])
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ])
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ])
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ])
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
); // Expected Output: 3
