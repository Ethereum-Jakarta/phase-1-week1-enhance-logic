class Graph {
  constructor(matriks) {
    this.grids = matriks;
    this.rows = this.grids.length;
    this.columns = this.grids[0].length;
  }

  dfs(row, column) {
    if (row < 0 || column < 0 || row >= this.rows || column >= this.columns || this.grids[row][column] === 0) return;
    this.grids[row][column] = 0;
    this.dfs(row + 1,column)
    this.dfs(row - 1,column);
    this.dfs(row ,column + 1);
    this.dfs(row ,column - 1);
  }
}

function islandCount(grid) {
  const graph = new Graph(grid);
  let count = 0;
  for (let row = 0; row < grid.length; row++){
    for (let column = 0; column < grid[row].length; column++){
      if (graph.grids[row][column] === 1){
        graph.dfs(row, column);
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