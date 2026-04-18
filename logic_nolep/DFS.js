// ## Soal 2: Depth-First Search (DFS)
// **Judul**: Island Count

// **Deskripsi**:
// Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air. Anda perlu menghitung jumlah pulau yang ada di peta. Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

// Contoh:
// ```js
// console.log(islandCount([
//   [1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0]
// ])); 
// ```

// jika di gambarkan seperti ini:
// ```js
// console.log(islandCount([
//   [🏝︎, 🏝︎, 🌊, 🌊, 🏝︎],
//   [🏝︎, 🏝︎, 🌊, 🌊, 🌊],
//   [🌊, 🌊, 🌊, 🏝︎, 🌊],
//   [🏝︎, 🌊, 🌊, 🌊, 🌊]
// ])); 
// ```

// Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.


/* ==== ALGORITHMS ====
1. Inside islandCount() function do this :
  1. Make instance for class Graph and make variable counter and put 0 as a default value
  2. Create a nested loop, then inside nested loop do this :
    - If the the current elemen is 1
    - Incerment a counter variable by 1
    - call dfs mathod like graph.dfs(grid, row, column);
  3. After all nested loop done, return the variable counter

2. Inside a Graph class :
  1. create a method  called dfs and inside this method do this :
    - Cretae a base case that check if column is a samller/bigger than a real column or row is smaller/bigger than a real row or even the element is 0, then retun or stop
    - Check if upper, bottom, left side, or right side of row and bottem has 1, if yes call dfs method (rekursion)
*/

class Graph {
  // Implementasi graph dan metode DFS
  dfs(grid, row, column) {
    if((row < 0 || row >= grid.length) || (column < 0 || column >= grid[row].length) || grid[row][column] === 0 ) return;

      grid[row][column] = 0;
      this.dfs(grid, row - 1, column);
      this.dfs(grid, row + 1, column);
      this.dfs(grid, row, column + 1);
      this.dfs(grid, row, column - 1);
  }

}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  const graph = new Graph();
  let counter = 0;

  for(let row = 0; row < grid.length; row++) {
    for(let column = 0; column < grid[row].length; column++) {
      if(grid[row][column] === 1) {
        counter++;
        graph.dfs(grid, row, column);
      }
    }
  }
  return counter;
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



