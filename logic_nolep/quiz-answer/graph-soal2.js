/* 
## Soal 2: Depth-First Search (DFS)
**Judul**: Island Count

**Deskripsi**:
Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, 
di mana "1" mewakili daratan dan "0" mewakili air. 
Anda perlu menghitung jumlah pulau yang ada di peta. 
Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

Contoh: */

// console.log(islandCount([
//   [1, 1, 0, 0, 1],
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [1, 0, 0, 0, 0]
// ])); 


// jika di gambarkan seperti ini:

// console.log(islandCount([
//   [🏝︎, 🏝︎, 🌊, 🌊, 🏝︎],
//   [🏝︎, 🏝︎, 🌊, 🌊, 🌊],
//   [🌊, 🌊, 🌊, 🏝︎, 🌊],
//   [🏝︎, 🌊, 🌊, 🌊, 🌊]
// ])); 


// Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.


class Graph {
  // Implementasi graph dan metode DFS
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  let counter = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();

  function dfs(r, c){
    // base case rekursif
    if ((r < 0) || (r >= rows) || (c < 0) || (c >= cols)) return;
    if (grid[r][c] === 0) return;
    if (visited.has(`${r},${c}`)) return;

    const key = `${r},${c}`;
    visited.add(key); // biar ga visit cell yg sama

    dfs(r+1, c); // bawah
    dfs(r-1, c); // atas
    dfs(r, c+1); // kanan
    dfs(r, c-1); // kiri
  }

  // looping grid
  for (let r = 0; r < rows; r++){
    for (let c = 0; c < cols; c++){
      if (grid[r][c] === 1 && !visited.has(`${r},${c}`)){
        counter++;
        dfs(r, c);
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