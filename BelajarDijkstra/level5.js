/*

👹 LEVEL 5 — BOSS FIGHT: Graph Master

Ini soal asli dari materimu (dokumen 1, bagian "Belajar contoh implementasi..."). Bedanya, sekarang kamu susun sendiri semuanya — gak ada starter code, cuma spesifikasi.

Misi:

Buat fungsi shortestPathWeightedGraph(graph, start, target) dengan struktur graf beda dari sebelumnya (perhatikan formatnya!):

Beda dari graf-graf sebelumnya, tetangga di sini disimpan sebagai array of objects ({ node, weight }), bukan { neighborName: weight }. Ini artinya for (let neighbor in graph[currentVertex]) tidak akan jalan sama — kamu perlu cara lain buat looping array ini (mis. for...of).

Requirement fungsi:

Return jarak terpendek (angka) dari start ke target — bukan object distances lengkap.
Kalau target tidak bisa dijangkau, return -1.

Boleh pakai ulang class PriorityQueue kamu, tapi bagian loop utama (dijkstra) dan getPath/adaptasinya harus kamu tulis ulang menyesuaikan format graf baru ini, plus tambahan logic buat handle "tidak terjangkau" → -1.

Tantangan tambahan (opsional, +bonus XP): hentikan loop lebih awal begitu target ketemu (early exit) biar lebih efisien — kayak yang ada di source materimu (if (currentVertex === end) break;).


⚠️ Catatan: saya kasih dua opsi jawaban di komentar test case buat A→E dan E→B, ini sengaja — bagian dari misimu adalah membuktikan lewat kode mana yang benar-benar terpendek, bukan cuma percaya komentar saya begitu aja!
*/

const graph = {
  'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
  'B': [{ node: 'A', weight: 3 }, { node: 'D', weight: 5 }],
  'C': [{ node: 'A', weight: 2 }, { node: 'D', weight: 4 }],
  'D': [{ node: 'B', weight: 5 }, { node: 'C', weight: 4 }, { node: 'E', weight: 1 }],
  'E': [{ node: 'D', weight: 1 }]
};

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    enqueue(element, priority) {
        this.elements.push({element, priority});
        this.elements.sort((a, b) => a.priority - b. priority);
    }

    dequeue() {
        return this.elements.shift().element;
    }

    isEmpty() {
        return this.elements.length === 0;
    }
}

function shortestPathWeightedGraph(graph, start, target) {
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();

    for (let vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            pq.enqueue(vertex, 0);
        }  else {
            distances[vertex] = Infinity;
            pq.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue();

        for (let neighbor of graph[currentVertex]) {
            const distance = distances[currentVertex] + neighbor.weight;
            if (distance < distances[neighbor.node]) {
                distances[neighbor.node] = distance;
                previous[neighbor.node] = currentVertex;
                pq.enqueue(neighbor.node, distance);
            }
        }
    }

    return distances[target] === Infinity ? -1 : distances[target];
}


console.log(shortestPathWeightedGraph(graph, 'A', 'E')); // harus: 6  (A->C->D->E = 2+4+1=6, atau A->B->D->E=3+5+1=9, jadi 6)
console.log(shortestPathWeightedGraph(graph, 'A', 'A')); // harus: 0
console.log(shortestPathWeightedGraph(graph, 'E', 'B')); // harus: 8  (E->D->B = 1+5 = 6, cek juga E->D->C->A->B = 1+4+2+3=10, jadi 6)