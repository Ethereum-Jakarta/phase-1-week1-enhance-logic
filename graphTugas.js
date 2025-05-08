/*
menambahkan pemahaman tersendiri

pemahaman mengenai method yang di pakai
new set adalah untuk set nilai start
shift adalah menghapus nilai pertama dan mencetak nya
has adalah mengecek apakah ada nilai yang di tentukan di dalamnya true | false
add adalah menambahkan nilai baru
push adalah menambahkan hasil kepada variable
*/

// function shortestPath(friends, start, target) {
//    if(start === target) { // jika start sama dengan nilai nya dengan target
//     return 0 // return 0
//    }
   
//    let queue = [start] // variable queue yang nilainya [start]
//    let visited = new Set([start]) // variable visited yang nilainya new set[starts]
//    let jarak = 0 // variable jarak yang nilainya 0

//    while (queue.length > 0) { // melakukan loop menggunakan while yang di dalamnya queue.length lebih besar dari 0
//    jarak++ // maka variable jarak ++
//    let penampungVar = queue.length // variable penampung yang nilainya queue.length
//    for(let i = 0; i < penampungVar; i++) { // melakukan for loop yang isinya var i sama dengan 0; var i kurang dari penampungVar; i++
//     let person = queue.shift() // variable person yang nilainya queue.shift()

//     for(const friend of friends[person]) {
//       if(!visited.has(friend)) { // jika visited.has(friend)
//         if(friend === target) {  // if friend sama dengan nilainya target 
//           return jarak // return jarak
//         }
//         visited.add(friend) // add friend ke visited
//         queue.push(friend) // push friend k queue
//       }
//     }
//    }
//   }
//    return -1
//   }
  
//   // Testcase 1
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'Alice', 'David')); // Expected Output: 2
  
//   // Testcase 2
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'Alice', 'Eve')); // Expected Output: 2
  
//   // Testcase 3
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'Alice', 'Alice')); // Expected Output: 0
  
//   // Testcase 4
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'David', 'Charlie')); // Expected Output: 3
  
//   // Testcase 5
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'Eve', 'Bob')); // Expected Output: 1
  
//   // Testcase 6
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'Charlie', 'Alice')); // Expected Output: 1
  
//   // Testcase 7
//   console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
//   }, 'David', 'Eve')); // Expected Output: 2

  // Soal 2: Depth-First Search (DFS) 
  class Graph {
    // Implementasi graph dan metode DFS
    constructor() {
      this.visited = new Set()
    }

    dfs(grid, row, col) {
      if(
        row < 0 || row >= grid.length ||
        col < 0 || col >= grid[0].length || 
        grid[row][col] === 0 ||
        this.visited.has(`${row}-${col}`)
      ) {
        return
      }

      this.visited.add(`${row}-${col}`)

      this.dfs(grid, row + 1, col);
      this.dfs(grid, row - 1, col);
      this.dfs(grid, row, col + 1);
      this.dfs(grid, row, col - 1);
    }
  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let graph = new Graph()
    let result = 0

    for(let row = 0; row < grid.length; row++) {
      for(let col = 0; col < grid[0].length; col++) {
        if(grid[row][col] === 1 && !graph.visited.has(`${row}-${col}`)) {
          result++
          graph.dfs(grid,row,col)
        }
      }
    }
    return result
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