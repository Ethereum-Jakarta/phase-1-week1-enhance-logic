class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
    this.visited = new Set();
  }

  dfs(r, c) {
    if (r < 0 || c < 0 || r >= this.rows || c >= this.cols) return;

    // air
    if (this.grid[r][c] === 0) return;

    const key = `${r},${c}`;
    if (this.visited.has(key)) return;

    this.visited.add(key);

    this.dfs(r + 1, c);
    this.dfs(r - 1, c);
    this.dfs(r, c + 1);
    this.dfs(r, c - 1);
  }
}

function islandCount(grid) {
  const graph = new Graph(grid);
  let count = 0;

  for (let r = 0; r < graph.rows; r++) {
    for (let c = 0; c < graph.cols; c++) {
      const key = `${r},${c}`;

      if (grid[r][c] === 1 && !graph.visited.has(key)) {
        count++;
        graph.dfs(r, c);
      }
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
