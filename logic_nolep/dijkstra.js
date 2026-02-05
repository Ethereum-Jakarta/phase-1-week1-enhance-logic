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
  const distances = {}; // mencatat jarak dari start ke setiap kota
  const previous = {}; // mencatat jejak dari start ke kota tujuan
  const pq = new PriorityQueue();

  for (let node in graph) {
    distances[node] = Infinity; // menganggap semua kota awalnya tidak terjangkau
    previous[node] = null; // belum ada jejak
  }

  distances[start] = 0; // jarak awal ke diri sendiri adalah 0
  pq.enqueue(start, 0); // memasukkan start ke antrean

  // ketika antrean tidak kosong:
  while (!pq.isEmpty()) {
    // mengambil kota dengan jarak terpendek
    let current = pq.dequeue();

    // jika kota saat ini adalah tujuan, maka berhenti
    if (current === end) break;

    for (let neighbor in graph[current]) {
      let weight = graph[current][neighbor]; // jarak dari kota saat ini ke kota yang bisa dikunjungi
      let newDist = distances[current] + weight; // total jarak jika lewat jalur ini

      // update jika menemui jalur yang lebih pendek
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist; // ganji jalur yang lama dengan jalur baru yang lebih pendek
        previous[neighbor] = current; // menandai kota ini jalur terbaiknya lewat 'current'

        // mendaftarkan kota yang bisa dikunjungi ke antrean untuk diperiksa cabang-cabangnya nanti
        pq.enqueue(neighbor, newDist);
      }
    }
  }

  // return jarak dan jejak perjalanan untuk digunakan function getPath
  return { distances, previous };
}

// Fungsi untuk mendapatkan jalur
function getPath(previous, start, end) {
  const path = [];

  // ambil tujuan, karena sudah tahu cara sampai ke tujuan sebelumnya dari kota apa
  let curr = end;

  //contoh previous testcase 1:
  //   {
  //   JKT: null,
  //   SBY: 'SMG',
  //   BDG: 'JKT',
  //   YOG: 'BDG',
  //   SMG: 'JKT',
  //   MDN: 'JKT',
  //   MKS: null
  // }

  // curr awalnya adalah SBY, cara mencapai SBY adalah melewati SMG.
  // kemudian curr dirubah menjadi SMG. karena value dari SBY = 'SMG'
  // SMG kemudian berubah menjadi JKT dengan logika yang sama
  // karena value dari JKT = null yang merupakan titik start, maka perulangan berhenti

  while (curr !== null) {
    path.push(curr); // memasukkan kota saat ini ke dalam rute
    curr = previous[curr];
  }

  if (path[path.length - 1] !== start) {
    return "Jalur tidak ditemukan!";
  }

  return path.reverse();
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
