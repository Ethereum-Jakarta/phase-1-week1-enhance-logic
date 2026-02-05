class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
    this.visited = new Set();
  }

  isPulau(row, col) {
    if (row < 0 || row >= this.rows || col < 0 || col >= this.cols)
      return false;

    const currIdx = row + "," + col;

    if (this.visited.has(currIdx)) return false;
    if (this.grid[row][col] === 0) return false;

    this.visited.add(currIdx);

    this.exploreLand(row - 1, col);
    this.exploreLand(row + 1, col);
    this.exploreLand(row, col - 1);
    this.exploreLand(row, col + 1);

    return true;
  }
}

function islandCount(grid) {
  let count = 0;
  const graph = new Graph(grid);

  for (let i = 0; i < grid.length; i++) {
    let row = i;
    for (let j = 0; j < grid[row].length; j++) {
      let col = j;
      if (graph.exploreLand(row, col) === true) count++;
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
  ]),
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]),
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ]),
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ]),
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ]),
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ]),
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]),
); // Expected Output: 3
