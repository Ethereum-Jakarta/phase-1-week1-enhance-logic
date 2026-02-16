function shortestPath(friends, start, target) {
  let queue = [[start, 0]]; // antrean yang menyimpan nama dan jarak
  let visited = new Set([start]); // catatan agar tidak terjadi perulangan (misal: Alice kenal Bob, Bob kenal Alice)

  // selama antrean tidak kosong:
  while (queue.length > 0) {
    let [current, distance] = queue.shift(); // mengambil orang dari antrean

    // cek apakah orang saat ini adalah target
    if (current === target) {
      return distance;
    }

    // cek teman dari orang saat ini
    for (let friend of friends[current]) {
      // proses teman yang belum ada di catatan
      if (!visited.has(friend)) {
        visited.add(friend); //tambahkan orang ke catatan
        queue.push([friend, distance + 1]); //masukkan ke antrean
      }
    }
  }

  return "Tidak ada koneksi ditemukan.";
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
    "David",
  ),
); // Expected Output: 2

// // Testcase 2
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
    "Eve",
  ),
); // Expected Output: 2

// // Testcase 3
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
    "Alice",
  ),
); // Expected Output: 0

// // Testcase 4
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
    "Charlie",
  ),
); // Expected Output: 3

// // Testcase 5
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
    "Bob",
  ),
); // Expected Output: 1

// // Testcase 6
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
    "Alice",
  ),
); // Expected Output: 1

// // Testcase 7
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
    "Eve",
  ),
); // Expected Output: 2
