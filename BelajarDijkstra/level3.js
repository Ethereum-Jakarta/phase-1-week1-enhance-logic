/*
🎮 LEVEL 3 — Path Finder (Boss lebih berat dikit!)

Misi: Sekarang gabungin logika yang kamu praktekkan manual di Level 1 (cek tetangga, bandingkan jarak, update kalau lebih pendek) jadi fungsi dijkstra() yang otomatis pakai PriorityQueue-mu.
Kita pakai graf yang sama kayak Level 1 biar kamu bisa langsung cocokkan hasilnya dengan tracing manualmu:

Petunjuk kecil:
- TODO 1 itu for (let vertex in graph) { ... } — persis pola yang ada di source materi yang kamu upload, coba lihat lagi bagian "Inisialisasi" di situ kalau lupa.
- TODO 2, loop luar pakai while (!pq.isEmpty()), loop dalam pakai for (let neighbor in graph[currentVertex]).
- Perhatikan: nilai distances[currentVertex] dipakai buat ngitung jarak ke tetangga — ini persis rumus jarak_baru = jarak(A→C) + bobot(C→tetangga) yang kamu hitung manual di Level 1!


*/
class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    // TODO: masukkan { element, priority } ke this.elements
    // lalu urutkan array supaya priority terkecil ada di depan
    this.elements.push({ element, priority});
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    // TODO: keluarkan & kembalikan element dengan priority terkecil
    // (yaitu elemen paling depan array, karena udah diurutkan)
    return this.elements.shift().element;
  }

  isEmpty() {
    // TODO: return true kalau queue kosong
    return this.elements.length === 0;
  }
}

const graph = {
  A: { B: 4, C: 1 },
  B: { A: 4, C: 2, D: 5 },
  C: { A: 1, B: 2, D: 8 },
  D: { B: 5, C: 8 }
};

function dijkstra(graph, start) {
  const distances = {};
  const previous = {};
  const pq = new PriorityQueue();

  // TODO 1: Inisialisasi
  // - untuk tiap vertex di graph:
  //   - kalau vertex === start, distances[vertex] = 0, enqueue dengan priority 0
  //   - kalau bukan, distances[vertex] = Infinity, enqueue dengan priority Infinity
  //   - previous[vertex] = null;


  for (let vertex in graph) {
    if (vertex === start) {
        distances[vertex] = 0;
        pq.enqueue(vertex, 0)
    } else {
        distances[vertex] = Infinity;
        pq.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }


  // TODO 2: Loop utama
  // - selama pq belum kosong:
  //   - ambil currentVertex dari pq (dequeue)
  //   - untuk tiap neighbor di graph[currentVertex]:
  //     - hitung distance = distances[currentVertex] + graph[currentVertex][neighbor]
  //     - kalau distance < distances[neighbor]:
  //       - update distances[neighbor] = distance
  //       - update previous[neighbor] = currentVertex
  //       - enqueue(neighbor, distance) 
  while (!pq.isEmpty()) {
    const currentVertex = pq.dequeue();
    for (let neighbor in graph[currentVertex]) {
        const jarak = distances[currentVertex] + graph[currentVertex][neighbor];
        if (jarak < distances[neighbor]) {
            distances[neighbor] = jarak;
            previous[neighbor] = currentVertex;
            pq.enqueue(neighbor, jarak);
        }
    }
  }

  return { distances, previous };
}

// --- TEST ---
const { distances, previous } = dijkstra(graph, 'A');
console.log(distances);
// harus mirip: { A: 0, B: 3, C: 1, D: 8 }  <- cocokkan sama hasil Level 1 kamu!
console.log(previous);
// harus nunjukkin: D lewat B, B lewat C, C lewat A