function shortestPath(friends, start, target) {
  const visited = { [start]: true },
    queue = [start];

  // counter disini berfungsi untuk mengecek berapa jarak / proses yang di lakukan untuk menemukan target.
  let counter = 0;
  while (queue.length) {
    const current = queue.shift();

    // counter langsung di increment, setiap kali mengakses, andai kata current adalah "Alice",
    // dan "Alice" memiliki "Bob, Charlie", yang akan memasuki antrian
    // dengan begitu di antrian selanjutnya, "Bob" akan di proses, dan "Bob", memiliki "Alice, David, Eve".
    counter++;
    for (const child of friends[current]) {
      // jika belum pernah dikunjungi
      if (!visited[child]) {
        // masukan ke kategori yang sudah pernah dikunjungi
        visited[child] = true;
        // masukkan "Bob, Charlie" ke dalam antrian
        queue.push(child);

        // jika child saat ini sama dengan target,
        // child "David", target "David", maka kembalikan nilai counter,
        if (child === target) return counter;
      }
    }
  }

  // pada validasi ini, karena pada perulangan di queue.length tidak ada hasil
  // maka check terlebih dahulu, apakah start == target, jika iya kembalikan 0,
  // jika tidak, kembalikan -1,
  // fungsi start == target disini, itu artinya untuk menemukan target, yang dimulai dari start, maka proses yang dilakukan itu 0
  return start === target ? 0 : -1;
}

// Testcase 1
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
    "David"
  )
); // Expected Output: 2
console.log("");

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
console.log("");

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
console.log("");

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
console.log("");

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
console.log("");

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
console.log("");

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
console.log("");

class Graph {
  constructor(grid) {
    this.grid = grid;
    this.ROW = grid.length;
    this.COL = grid[0].length;
  }

  DFS(row, col, component, visited) {
    // row dan col harus lebih besar besar atau sama dengan 0
    // ROW harus lebih besar dari row
    // COL harus lebih besar dari col
    // apakah !visited[row][col] bernilai false, jika iya, buat jadi true dengan "!"
    // apakah this.grid[row][col] nilai nya adalah 1
    if (
      row >= 0 &&
      row < this.ROW &&
      col >= 0 &&
      col < this.COL &&
      !visited[row][col] &&
      this.grid[row][col] === 1
    ) {
      // buat nilai visited[row][col] menjadi true, atau sudah tidak dapat dikunjungi kembali.
      visited[row][col] = true;
      // jangan lupa push nilai nya ke component, yang dimana component nantinya akan di push ke components "ada pada function islandCount"
      component.push([row, col]);

      // jadi sederhana, 4 baris kode di bawah ini, untuk mengecek sekitar secara horizontal ataupun vertical.
      // biar saya perjelas dengan visualisasi ini: https://excalidraw.com/#json=ROnUaS4ih5t-DtEp9eFzx,6Yo40ZrD4MgFgt7KftY3kw
      // maaf jika visualisasi yang saya buat salah, ini berdasarkan pemahaman dan teori yang saya pahami
      this.DFS(row - 1, col, component, visited); // atas
      this.DFS(row + 1, col, component, visited); // bawah
      this.DFS(row, col - 1, component, visited); // kiri
      this.DFS(row, col + 1, component, visited); // kanan
    }
  }
}

function islandCount(grid) {
  const ROW = grid.length;
  const COL = grid[0].length;

  // ini sebagai visited, jadi pada DFS, kita perlu satu penampung, yang disebut visited,
  // ini akan membantu proses gimana memecah sebuah pulau menjadi 1 component berbeda
  // jadi visited ini awal nilai nya adalah false, dan row dan col yang dibuat juga sesuai isi data pada matrix grid
  // seluruh nilai pada visited ini bernilai false, yang artinya belum ada 1 tetangga pun yang pernah dikunjungi
  const visited = Array.from(Array(ROW), () => Array(COL).fill(false));

  // fungsi components disini agar component yang sudah di buat,
  // di simpan di dalam ini, yang merprentasikan, berapa banyak jumlah pulau (component).
  const components = [];

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      // jika grid[i][j] sama dengan angka 1 dan visited[i][j] adalah false, maka diubah menjadi true dengan operator "!".
      if (grid[i][j] === 1 && !visited[i][j]) {
        // component, untuk menampung nilai
        const component = [];
        // jadi nilai grid di bagikan ke graph, yang di tampung pada this.grid
        const graph = new Graph(grid);
        // kirim i sebagai row dan j sebagai col, tidak lupa untuk mengirim component dan visited
        graph.DFS(i, j, component, visited);
        // ketika seluruh nilai sudah pada component, maka kirim ke components
        components.push(component);

        // dan terus berlanjut.
        // untuk memahami apa yang terjadi: https://excalidraw.com/#json=cUJU6xi4qUzsOI4upLL_S,rsEqpxEqhgoH1N2AcUmIoA
      }
    }
  }

  return components.length;
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
console.log("");

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
); // Expected Output: 3
console.log("");

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ])
); // Expected Output: 5
console.log("");

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ])
); // Expected Output: 4
console.log("");

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ])
); // Expected Output: 6
console.log("");

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ])
); // Expected Output: 2
console.log("");

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
); // Expected Output: 3
