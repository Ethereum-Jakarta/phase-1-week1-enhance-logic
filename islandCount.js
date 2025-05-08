class Graph {
  // Implementasi graph dan metode DFS
  constructor(grid) {
    this.grid = grid;
  }

  DFSUtil(i, j, visited) {
    if (i < 0 || i >= this.grid.length || j < 0 || j >= this.grid[i].length || visited.has(`${i},${j}`) || this.grid[i][j] === 0) {
      return false;
    }
    visited.add(`${i},${j}`);

    this.DFSUtil(i, j + 1, visited);
    this.DFSUtil(i - 1, j, visited);
    this.DFSUtil(i, j - 1, visited);
    this.DFSUtil(i + 1, j, visited);
    
    return true;
  }

  DFS() {
    //...DFS
    let visited = new Set();
    let count = 0;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.DFSUtil(i, j, visited) == true) {
          count++;
        }
      }
    }
    return count;
  }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  const peta = new Graph(grid);
  return peta.DFS();
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
