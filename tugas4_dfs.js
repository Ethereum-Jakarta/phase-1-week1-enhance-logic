// Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air.
// Anda perlu menghitung jumlah pulau yang ada di peta. Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

class Graph {
  constructor(grid) {
    this.grid = grid;
  }

  DFS(row, column) {
    if (
      row < 0 ||
      row >= this.grid.length ||
      column < 0 ||
      column >= this.grid[0].length ||
      this.grid[row][column] === 0
    ) {
      return;
    }

    this.grid[row][column] = 0;

    this.DFS(row + 1, column);
    this.DFS(row - 1, column);
    this.DFS(row, column + 1);
    this.DFS(row, column - 1);
  }
}

function islandCount(grid) {
  let myGraph = new Graph(grid);
  let count = 0;

  for (let i = 0; i < myGraph.grid.length; i++) {
    for (let j = 0; j < myGraph.grid[i].length; j++) {
      if (myGraph.grid[i][j] === 1) {
        myGraph.DFS(i, j);
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
