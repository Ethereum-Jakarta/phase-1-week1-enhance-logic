class Graph {
  // Implementasi graph dan metode DFS
  constructor(grid) {
    this.maxRows = grid.length;
    this.maxCols = grid[0].length;
  }

  dfs(grid, row, col) {
    if ( row < 0 || 
      col < 0 || 
      row >= this.maxRows || 
      col >= this.maxCols || 
      grid[row][col] == 0 ) return;

    grid[row][col] = 0

    this.dfs(grid, row - 1, col) // Up
    this.dfs(grid, row + 1, col) // Down
    this.dfs(grid, row, col - 1) // Left
    this.dfs(grid, row, col + 1) // Right
  }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  const graph = new Graph(grid)
  let island = 0;

  for ( let i = 0; i < graph.maxRows; i++ ) {
    for ( let j = 0; j < graph.maxCols; j++ ) {
      if ( grid[i][j] == 1 ) {
        island++
        graph.dfs(grid, i, j)
      }
    }
  }

  return island
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
