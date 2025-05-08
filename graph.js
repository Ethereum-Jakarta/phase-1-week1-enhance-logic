//! Soal 1: Breadth-First Search (BFS)
//! Judul: Shortest Path Friends

function shortestPath(friends, start, target) {
  //buat queue dan visited, queue nya tambahkan angka untuk path ke-x
  let queue = [[start, 0]];
  let visited = new Set();

  while (queue.length > 0) {
    // queue stack, destructure ke var current dan path
    // tambahkan juga ke array visited
    const [current, path] = queue.shift();
    visited.add(current);

    // kalau cocok, return path
    if (current === target) {
      return path;
    }

    // kalau gk cocok, periksa friends nya apakah ada yg cocok, memakai loop for of
    for (const friend of friends[current]) {
      // kalau friend nya cocok, return path tp tambahin 1 karena udah termasuk layer selanjutnya
      if (friend === target) {
        return path + 1;
      }

      // kalau friend jg gk cocok, dan friend gk ada di visited, masukkan ke queue, dengan path nya + 1
      if (!visited.has(friend)) {
        queue.push([friend, path + 1]);
      }
    }
  }
  return -1;
}

console.log("bfs :");
// 2 2 0 3 1 1 2

// Testcase 1
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "Eve"],
      Charlie: ["Alice", "David", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "David"
  )
); // Expected Output: 2

// Testcase 2
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Eve"
  )
); // Expected Output: 2

// Testcase 3
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Alice"
  )
); // Expected Output: 0

// Testcase 4
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Charlie"
  )
); // Expected Output: 3

// Testcase 5
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Eve",
    "Bob"
  )
); // Expected Output: 1

// Testcase 6
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Charlie",
    "Alice"
  )
); // Expected Output: 1

// Testcase 7
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Eve"
  )
); // Expected Output: 2

//! Soal 2: Depth-First Search (DFS)
//! Judul: Island Count

// buat class untuk membuat graph dulu, isinya grid, rows, cols
class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
  }

  // method untuk implementasi dfs, ngecek tetangga atas bawah kiri kanan tiap titik pulau
  dfs(row, col) {
    // kalau current titik terlalu atas/bawah/kanan/kiri (di luar jangkauan grid), return
    if (col < 0 || row < 0 || col >= this.cols || row >= this.rows || this.grid[row][col] === 0) {
      return;
    }

    // kalau nilainya 1, jadiin ke 0 untuk menghentikan rekursi
    this.grid[row][col] = 0;

    // periksa tetangga atas bawah kiri kanan tiap titik pulau. kalau di luar jangkauan nanti akan return kosong
    this.dfs(row + 1, col);
    this.dfs(row - 1, col);
    this.dfs(row, col + 1);
    this.dfs(row, col - 1);
  }
}

// fungsi menhghitung jumlah pulau
function islandCount(grid) {
  // kalau grid nya kosong, ya return 0
  if (grid.length <= 0) {
    return 0;
  }

  // buat count untuk hasil hitungan
  let count = 0;
  // buat object Graph
  const island = new Graph(grid);

  // loop kan tiap baris dan kolom satu per satu
  for (let i = 0; i < island.rows; i++) {
    for (let j = 0; j < island.cols; j++) {
      // kalau ada yg nilainya 1, berarti titik pulau. nah tambahkan count
      if (grid[i][j] === 1) {
        count++;
        // karena tiap titik yg tetanggaan itu dianggap 1 pulau,
        // keluarkan method dfs untuk mengubah titik pulau tetangga nya menjadi 0 biar gk kehitung lagi
        island.dfs(i, j);
      }
    }
  }
  return count;
}

console.log("dfs:");
// 1 3 5 4 6 2 3

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
