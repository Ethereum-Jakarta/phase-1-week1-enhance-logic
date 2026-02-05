function islandCount(grid) {
  // cek grid
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // function bantuan untuk menjelajahi daerah sekitar titik awal
  function explore(r, c) {
    // batasan grid, dan stopper jika berada di air
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) {
      return;
    }

    // merubah daratan menjadi air agar tidak terjadi infinite loop
    grid[r][c] = 0;

    // berpindah ke sisi lain daratan saat ini
    explore(r + 1, c); // bawah
    explore(r - 1, c); // atas
    explore(r, c + 1); // kanan
    explore(r, c - 1); // kiri
  }

  // perulangan di dalam matriks
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // jika menemukan daratan:
      if (grid[r][c] === 1) {
        count++; // menambah couter pulau
        explore(r, c); // memanggil function untuk merubah titik menjadi air
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
