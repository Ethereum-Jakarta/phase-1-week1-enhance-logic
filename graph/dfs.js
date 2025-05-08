/**
 * Soal 2: Depth-First Search (DFS)
Judul: Island Count

Deskripsi:
Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air. 
Anda perlu menghitung jumlah pulau yang ada di peta. 
Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.
 */

class Graph {
    // Implementasi graph dan metode DFS

    constructor(grid){
      this.grid = grid
    }

     dfs(row, col) {
        if(row < 0 || row > this.grid.length-1 || col < 0 || col > this.grid[row].length -1 || this.grid[row][col]===0){
          return;
        }
        this.grid[row][col]=0

        this.dfs(row+1,col)
        this.dfs(row-1,col)
        this.dfs(row,col+1)
        this.dfs(row,col-1)

        return 1
     }


  }
  
  function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    let island = new Graph(grid)
    
    let count = 0
    for (let i = 0; i < island.grid.length; i++) {
      for (let j = 0; j < island.grid[i].length; j++) {
        if(island.grid[i][j]===1){
          island.dfs(i,j)
          count++
        }
      }
      
    }
    return count
    
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

