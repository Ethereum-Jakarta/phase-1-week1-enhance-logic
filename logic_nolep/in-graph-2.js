class Graph {
    constructor(grid) {
      this.grid = grid;
      this.rows = grid.length;
      this.cols = grid[0].length;
      this.visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
    }
  
    isSafe(row, col) {
      return (
        row >= 0 &&
        col >= 0 &&
        row < this.rows &&
        col < this.cols &&
        this.grid[row][col] === 1 &&
        !this.visited[row][col]
      );
    }
  
    dfs(row, col) {
      // Arah: atas, bawah, kiri, kanan
      const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
  
      this.visited[row][col] = true;
  
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (this.isSafe(newRow, newCol)) {
          this.dfs(newRow, newCol);
        }
      }
    }
  }
  
  function islandCount(grid) {
    const graph = new Graph(grid);
    let count = 0;
  
    for (let row = 0; row < graph.rows; row++) {
      for (let col = 0; col < graph.cols; col++) {
        if (grid[row][col] === 1 && !graph.visited[row][col]) {
          graph.dfs(row, col);
          count++;
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
