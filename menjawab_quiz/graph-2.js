class Graph {
  constructor(matriks) {
    this.grids = matriks;
    this.rows = this.grids.length;
    this.cols = this.grids[0].length;
    // this.count = 0;
  }

  dfs(row, col) {
    if (row < 0 || col < 0 || row >= this.rows || col >= this.cols || this.grids[row][col] === 0) return;
    // console.log(row, col)
    this.grids[row][col] = 0;
    this.dfs(row + 1,col)
    this.dfs(row - 1,col);
    this.dfs(row ,col + 1);
    this.dfs(row ,col - 1);
    // this.count++;
  // console.log(this.grids[row][col])
  }
}

function islandCount(grid) {
  const graph = new Graph(grid);
  let count = 0;
  // console.log(graph);

  // graph.dfs(0, 0);
  // console.log(graph);
  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
      if (graph.grids[row][col] === 1){
        graph.dfs(row, col);
        count++;
      }
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