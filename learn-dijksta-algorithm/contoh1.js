// algoritma mencari jarak terpendek dari graph berbentuk nested object dan weighted.
// parameter nya graph dan awal titik node
function dijkstra(graph, startNode) {
  const distances = {}; // Menyimpan jarak terpendek dari startNode ke setiap simpul
  const visited = new Set(); // Menandai simpul-simpul yang sudah dikunjungi
  const queue = []; // Antrian prioritas untuk simpul-simpul yang akan dieksplorasi (sort terkecil)

  // Inisialisasi jarak awal dan antrian
  for (const node in graph) {
    // loop for in object graph, membuat object distances, key = node, value = 0 untuk statNode atau infinity
    // misal {A:0, B:infinity, dst}
    distances[node] = node === startNode ? 0 : Infinity;
    queue.push({ node, distance: distances[node] });
  }

  // Looping utama untuk mencari jarak terpendek!!!!!!!!
  // loop terus berjalan selama ada elemen di dalam array queue
  while (queue.length > 0) {
    // urutkan dulu dari yg paling kecil, untuk awal2 pastinya startNode di awal
    // konsep sort() di dalemnya berarti ngurutin berdasarkan key distance yg ada di dalam object dalam array
    queue.sort((a, b) => a.distance - b.distance);
    // keluarkan node array[0] dari queue menggunakan shift, dan masukkan ke variabel node dgn destructuring
    const { node } = queue.shift();

    // kalau node ada di Set visited, berarti udah dikunjungi, dan continue in aja loop nya
    if (visited.has(node)) continue;
    // kalau belum visited, masukkan ke Set visited, lanjutkan proses pencarian
    visited.add(node);

    // loop for in untuk mencari jarak dari node ke tiap neighbor nya
    for (const neighbor in graph[node]) {
      // hitung jarak dari node ke neighbor :
      // kalau node nya masih startNode, 0 + jarak ke neighbor
      // kalau node nya udah bukan startNode,...
      // hitung (distances terpendek dari startNode ke neighbor) + (jarak dari neighbor ke neighbor setelahnya)
      const distance = distances[node] + graph[node][neighbor];
      // kalau hitungan sekarang lebih kecil dari jarak yg tersimpan di object distances,
      // masukin nilai distance nya
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        // masukkan queue nya ke object distances, dengan value nya hasil penghitungan distance
        queue.push({ node: neighbor, distance });
      }
    }
  }

  return distances;
}

// Contoh graf berbobot dalam bentuk objek
const graph = {
  A: { B: 5, C: 2 },
  B: { A: 5, C: 1, D: 3 },
  C: { A: 2, B: 1, D: 8 },
  D: { B: 3, C: 8 },
};
const graph2 = {
  A: { B: 5, D: 3 },
  B: { A: 5, C: 2, D: 3, E: 1 },
  C: { B: 2, F: 8 },
  D: { A: 3, B: 3, E: 3 },
  E: { B: 1, D: 3, F: 8 },
  F: { C: 8, E: 8 },
};

const startNode = "A";
const shortestDistances = dijkstra(graph, startNode);
console.log(shortestDistances); // Hasil jarak terpendek dari simpul A ke semua simpul lain

console.log(dijkstra(graph2, "A"));
