class Graph {
    // Implementasi graph dan metode DFS
    constructor(matrix){
      this.grid = matrix;
      this.row = this.grid.length;
      this.column = this.grid[0].length
    }

    dfs(row, column){
      if (row < 0 || column < 0 || row >= this.row || column >= this.column || this.grid[row][column] === 0){
        return;
      }
      this.grid[row][column] = 0
      this.dfs(row + 1, column)
      this.dfs(row - 1, column)
      this.dfs(row, column + 1)
      this.dfs(row, column - 1)
    }
  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    const pulau = new Graph(grid)
    let count = 0

    for (let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if (pulau.grid[i][j] === 1){
          pulau.dfs(i, j)
          count++
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