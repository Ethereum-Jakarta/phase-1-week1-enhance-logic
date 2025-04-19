// // BFS Graph

// const shortestPath = (friends, starts, target) => {
//   const visited = new Set();
//   const queue = [[starts, 0]];

//   while (queue.length > 0) {
//     const [friend, distance] = queue.shift();

//     if (friend === target) return distance;

//     visited.add(friend);

//     for (const nextFriend of friends[friend])
//       if (!visited.has(nextFriend)) queue.push([nextFriend, distance + 1]);
//   }
//   return -1;
// };
// // Testcase 1
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'Alice',
//     'David'
//   )
// ); // Expected Output: 2

// // Testcase 2
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'Alice',
//     'Eve'
//   )
// ); // Expected Output: 2

// // Testcase 3
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'Alice',
//     'Alice'
//   )
// ); // Expected Output: 0

// // Testcase 4
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'David',
//     'Charlie'
//   )
// ); // Expected Output: 3

// // Testcase 5
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'Eve',
//     'Bob'
//   )
// ); // Expected Output: 1

// // Testcase 6
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'Charlie',
//     'Alice'
//   )
// ); // Expected Output: 1

// // Testcase 7
// console.log(
//   shortestPath(
//     {
//       Alice: ['Bob', 'Charlie'],
//       Bob: ['Alice', 'David', 'Eve'],
//       Charlie: ['Alice', 'Eve'],
//       David: ['Bob'],
//       Eve: ['Bob', 'Charlie'],
//     },
//     'David',
//     'Eve'
//   )
// ); // Expected Output: 2

// DFS Graph
class Graph {
  // Implementasi graph dan metode DFS
  constructor(grid) {
    this.grid = grid;
  }
  dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= this.grid.length ||
      col >= this.grid[row].length ||
      this.grid[row][col] === 0
    )
      return;

    this.grid[row][col] = 0;

    this.dfs(row - 1, col);
    this.dfs(row + 1, col);
    this.dfs(row, col - 1);
    this.dfs(row, col + 1);
  }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  let maps = new Graph(grid);
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 1) {
        maps.dfs(row, col);
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
