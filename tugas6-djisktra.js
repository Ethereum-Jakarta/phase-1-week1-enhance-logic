// LOGIC NOLEP (dijkstra.js)
// Deskripsi Soal:

// Kalian diminta untuk mengimplementasikan fungsi shortestPathDijkstraArray yang akan menghitung jarak terpendek antara dua simpul pada sebuah graph berbobot dengan bobot non-negatif. Graph tersebut direpresentasikan dalam bentuk array dua dimensi yang menyatakan bobot antara simpul-simpul. Elemen graph[i][j] pada array merepresentasikan bobot dari simpul i ke simpul j. Jika tidak ada sisi yang menghubungkan simpul i dan j, maka graph[i][j] akan bernilai -1.

// Tugas:

// Implementasikan fungsi shortestPathDijkstraArray dengan tiga parameter:

// graph (array): Representasi graph berbobot dalam bentuk array dua dimensi.

// start (number): Nomor simpul awal.

// target (number): Nomor simpul tujuan.

// Fungsi shortestPathDijkstraArray harus mengembalikan jarak terpendek dari simpul start ke simpul target dalam graph berbobot yang diberikan. Jika tidak ada jalur yang memungkinkan, fungsi harus mengembalikan nilai -1.

// Contoh:

// Misalkan terdapat graph berbobot berikut:
// Graph:
//   0 --3-- 1 --1-- 2
//   |        |
//   4 --2-- 3

// Graph tersebut dapat direpresentasikan dalam bentuk array dua dimensi sebagai berikut:
// const graph = [
//   [-1, 3, -1, -1, -1],
//   [3, -1, 1, 1, -1],
//   [-1, 1, -1, -1, -1],
//   [-1, 1, -1, -1, 2],
//   [-1, -1, -1, 2, -1]
// ];

// Jika kita ingin mencari jarak terpendek dari simpul 0 ke simpul 2, maka fungsi shortestPathDijkstraArray(graph, 0, 2) harus mengembalikan nilai 4.

// Note:

// Pastikan Anda menggunakan Dijkstra's Algorithm untuk mencari jarak terpendek pada graph berbobot.
function shortestPathDijkstraArray(graph, start, target) {
  // code
}

// Testcase 1
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    2
  )
); // Expected Output: 4

// Testcase 2
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 6

// Testcase 3
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    1,
    3
  )
); // Expected Output: 1

// Testcase 4
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 2, -1, -1, -1],
      [2, -1, 1, -1, 3],
      [-1, 1, -1, 4, -1],
      [-1, -1, 4, -1, 2],
      [-1, 3, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 5

// Testcase 5
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 1, 2, -1],
      [1, -1, -1, 3],
      [2, -1, -1, -1],
      [-1, 3, -1, -1],
    ],
    0,
    3
  )
); // Expected Output: 4
