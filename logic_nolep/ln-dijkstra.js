// # LOGIC NOLEP (dijkstra.js)

// ## Jalur Terpendek Antar Kota di Indonesia

// **Deskripsi Soal**:

// Anda adalah seorang perencana perjalanan yang sedang merancang rute terbaik untuk wisatawan yang ingin mengunjungi beberapa kota besar di Indonesia. Anda memiliki informasi tentang jarak langsung antar kota (dalam kilometer) sebagai berikut:

// - Jakarta (JKT)
// - Surabaya (SBY)
// - Bandung (BDG)
// - Yogyakarta (YOG)
// - Semarang (SMG)
// - Medan (MDN)
// - Makassar (MKS)

// Jarak antar kota (dalam km):

// - Jakarta - Bandung: 150
// - Jakarta - Semarang: 450
// - Bandung - Yogyakarta: 400
// - Semarang - Surabaya: 350
// - Yogyakarta - Surabaya: 300
// - Surabaya - Makassar: 900
// - Semarang - Yogyakarta: 130
// - Jakarta - Medan: 1800
// - Medan - Makassar: 2500

// **Tugas**:

// Jawablah Pertanyaan2 berikut menggunakan bahasa pemrograman javascript:

// 1. Apa jalur terpendek dari Jakarta ke Surabaya? Berapa total jaraknya?
// 2. Jika seorang wisatawan ingin melakukan perjalanan dari Medan ke Yogyakarta, apa rute terpendek yang harus dia ambil? Berapa total jarak yang harus ditempuh?
// 3. Seorang pengusaha perlu melakukan perjalanan dari Bandung ke Makassar. Apa rute terpendek yang bisa dia ambil dan berapa total jaraknya?
// 4. Jika ada jalan baru yang dibangun langsung dari Jakarta ke Yogyakarta sejauh 500 km, apakah ini akan mengubah jalur terpendek dari Jakarta ke Surabaya? Jika ya, bagaimana rute barunya dan berapa jaraknya?
// 6. Buatlah table semuajarak antar kota menggunakan `console.table()`

// Fungsi shortestPathDijkstraArray harus mengembalikan jarak terpendek dari simpul start ke simpul target dalam graph berbobot yang diberikan. Jika tidak ada jalur yang memungkinkan, fungsi harus mengembalikan nilai -1.

// **Contoh**:
// Misalkan terdapat graph berbobot berikut:

// ![image](https://github.com/user-attachments/assets/e4ce9e05-b1f0-4d20-909c-65ca539c7f92)

// Graph tersebut dapat direpresentasikan dalam bentuk array dua dimensi sebagai berikut:

// // ```
// const graph = {
//     'JKT': { 'BDG': 150, 'SMG': 450, 'MDN': 1800 },
//     'SBY': { 'SMG': 350, 'YOG': 300, 'MKS': 900 },
//     'BDG': { 'JKT': 150, 'YOG': 400 },
//     'YOG': { 'BDG': 400, 'SBY': 300, 'SMG': 130 },
//     'SMG': { 'JKT': 450, 'SBY': 350, 'YOG': 130 },
//     'MDN': { 'JKT': 1800, 'MKS': 2500 },
//     'MKS': { 'SBY': 900, 'MDN': 2500 }
// };
// ```
// Jika kita ingin mencari jarak terpendek dari simpul 0 ke simpul 2, maka fungsi shortestPathDijkstraArray(graph, 0, 2) harus mengembalikan nilai 4.

// **Note**:
// Pastikan Anda menggunakan Dijkstra's Algorithm untuk mencari jarak terpendek pada graph berbobot.

// ```js
// Definisi graf
const graph = {
  JKT: { BDG: 150, SMG: 450, MDN: 1800 },
  SBY: { SMG: 350, YOG: 300, MKS: 900 },
  BDG: { JKT: 150, YOG: 400 },
  YOG: { BDG: 400, SBY: 300, SMG: 130 },
  SMG: { JKT: 450, SBY: 350, YOG: 130 },
  MDN: { JKT: 1800, MKS: 2500 },
  MKS: { SBY: 900, MDN: 2500 },
};

// Implementasi Priority Queue sederhana
class PriorityQueue {
  constructor() {
    this.elements = [];
  }
  enqueue(element, priority) {
    this.elements.push({ element, priority });
    this.elements.sort((a, b) => a.priority - b.priority);
  }
  dequeue() {
    return this.elements.shift().element;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
}

// Fungsi Dijkstra
function dijkstra(graph, start, end) {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();
  // Tulis Code
  for (let vertex in graph) {
    if (vertex === start) {
      distances[vertex] = 0;
      pq.enqueue(vertex, 0);
    } else {
      distances[vertex] = Infinity;
      pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }

  while (!pq.isEmpty()) {
    const currentVertex = pq.dequeue();

    for (let neighbor in graph[currentVertex]) {
      const distance =
        distances[currentVertex] + graph[currentVertex][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentVertex;
        pq.enqueue(neighbor, distance);
      }
    }
  }
  return { distances, previous };
}

// Fungsi untuk mendapatkan jalur
function getPath(previous, start, end) {
  const path = [];
  // Tulis code untuk mendapatkan jalur di sini
  let current = end;
  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}

// Fungsi untuk menyelesaikan soal
// FUNCTION DI BAWAH TIDAK BOLEH DI UBAH
function solveQuestions() {
  // TESTCASE 1. Jakarta ke Surabaya
  let { distances, previous } = dijkstra(graph, "JKT", "SBY");
  let path = getPath(previous, "JKT", "SBY");
  console.log(
    "1. Jalur terpendek Jakarta ke Surabaya:",
    path.join(" -> "),
    "dengan jarak",
    distances["SBY"],
    "km",
  );
  // Expected return: Jalur terpendek Jakarta ke Surabaya: JKT -> SMG -> SBY dengan jarak 800 km

  // TESTCASE 2. Medan ke Yogyakarta
  ({ distances, previous } = dijkstra(graph, "MDN", "YOG"));
  path = getPath(previous, "MDN", "YOG");
  console.log(
    "2. Jalur terpendek Medan ke Yogyakarta:",
    path.join(" -> "),
    "dengan jarak",
    distances["YOG"],
    "km",
  );
  // Expected return: Jalur terpendek Medan ke Yogyakarta: MDN -> JKT -> BDG -> YOG dengan jarak 2350 km

  // TESTCASE 3. Bandung ke Makassar
  ({ distances, previous } = dijkstra(graph, "BDG", "MKS"));
  path = getPath(previous, "BDG", "MKS");
  console.log(
    "3. Jalur terpendek Bandung ke Makassar:",
    path.join(" -> "),
    "dengan jarak",
    distances["MKS"],
    "km",
  );
  // Expected return: Jalur terpendek Bandung ke Makassar: BDG -> YOG -> SBY -> MKS dengan jarak 1600 km

  // TESTCASE 4. Menambahkan jalan baru Jakarta ke Yogyakarta dengan jarak 450KM
  graph["JKT"]["YOG"] = 450;
  graph["YOG"]["JKT"] = 450;
  ({ distances, previous } = dijkstra(graph, "JKT", "SBY"));
  path = getPath(previous, "JKT", "SBY");
  console.log(
    "4. Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya:",
    path.join(" -> "),
    "dengan jarak",
    distances["SBY"],
    "km",
  );
  // Expected return: Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya: JKT -> YOG -> SBY dengan jarak 750 km
}

// Menjalankan solusi
solveQuestions();
