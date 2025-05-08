function shortestPath(friends, start, target) {
    if(start == target){
        return 0;
    }
  let que = [start];
  let visited = [];
  let obj = {};
  let counter=0;
  while (que.length > 0) {
    let current = que[0];
    if (obj[current] == undefined) {
      visited.push(current);
      counter++;
      que.shift();
      for (let i = 0; i < friends[current].length; i++) {
        if(friends[current][i]== target){
            return counter;
        }
        visited.push(friends[current][i])
        que.push(friends[current][i]);
      }
    }
    obj[current]= true;
  }
  return -1;
}


class Graph {
  // Implementasi graph dan metode DFS
  
  constructor(matrix){
    this.matrix = matrix;
  }
  DFS(row,col){
    if((row < 0 || row >= this.matrix.length) || (col < 0 || col >= this.matrix[row].length) || this.matrix[row][col] == 0){
      return;
    }
    this.matrix[row][col] =0;

    // arah atas
    this.DFS(row-1,col);

    // arah bawah
    this.DFS(row+1,col);

    //arah kanan
    this.DFS(row,col+1);
    
    // arah kiri
    this.DFS(row,col-1);
    

    // [1, 1, 1],
    // [0, 0, 0],
    // [1, 0, 1]
    
  }
   
}

function islandCount(grid) {
  let result=0;
  let graph = new Graph(grid);
  for(let i=0;i<grid.length;i++){
    for(let j=0;j<grid[i].length;j++){
      if(grid[i][j] == 1){
        result ++;
        graph.DFS(i,j)
      }
    }
  }
  return result;
}

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

// Testcase 1
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "Alice",
//     "David"
//   )
// ); // Expected Output: 2

// // Testcase 2
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "Alice",
//     "Eve"
//   )
// ); // Expected Output: 2

// // Testcase 3
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "Alice",
//     "Alice"
//   )
// ); // Expected Output: 0

// // Testcase 4
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "David",
//     "Charlie"
//   )
// ); // Expected Output: 3

// // Testcase 5
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "Eve",
//     "Bob"
//   )
// ); // Expected Output: 1

// // Testcase 6
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "Charlie",
//     "Alice"
//   )
// ); // Expected Output: 1

// // Testcase 7
// console.log(
//   shortestPath(
//     {
//       Alice: ["Bob", "Charlie"],
//       Bob: ["Alice", "David", "Eve"],
//       Charlie: ["Alice", "Eve"],
//       David: ["Bob"],
//       Eve: ["Bob", "Charlie"],
//     },
//     "David",
//     "Eve"
//   )
// ); // Expected Output: 2
