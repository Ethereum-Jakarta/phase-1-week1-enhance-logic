// LOGIC NOLEP (graph.js)
// Soal 1: Breadth-First Search (BFS)
// Judul: Shortest Path Friends

// Deskripsi:

// Anda diberikan daftar teman-teman dalam bentuk objek dengan struktur sebagai berikut:

// const friends = {
//   'Alice': ['Bob', 'Charlie'],
//   'Bob': ['Alice', 'David', 'Eve'],
//   'Charlie': ['Alice', 'Eve'],
//   'David': ['Bob'],
//   'Eve': ['Bob', 'Charlie']
// };

// Objek friends ini menggambarkan hubungan pertemanan antara beberapa orang. Setiap kunci dalam objek tersebut adalah nama seseorang, dan nilai yang terkait adalah daftar teman-teman orang tersebut.

// Sebagai contoh, untuk orang Alice, teman-temannya adalah Bob dan Charlie. Untuk orang Bob, teman-temannya adalah Alice, David, dan Eve, dan seterusnya.

// Tugas Anda adalah mengimplementasikan fungsi shortestPath(friends, start, target) yang akan menghitung panjang jalur terpendek dari teman start ke teman target menggunakan algoritma BFS (Breadth-First Search). Ini berarti Anda akan mencari jalur yang melibatkan teman-teman secara berurutan dari start ke target.

// Jika tidak ada jalur yang menghubungkan start dan target, maka fungsi harus mengembalikan nilai -1.

// Sebagai contoh, dalam objek friends yang diberikan di atas, jika Anda ingin mencari jalur terpendek dari Alice ke David, Anda akan menemukan bahwa jalur terpendek adalah Alice -> Bob -> David, yang memiliki panjang 2.

function shortestPath(friends, start, target) {
  //code
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
