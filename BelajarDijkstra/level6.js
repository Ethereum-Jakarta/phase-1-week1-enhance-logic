/*

👑 LEVEL 6 — FINAL BOSS: Nusantara Navigator

Ini boss terakhir, dari dokumen 2 (jalur kota Indonesia). Lebih berat karena ada 4 pertanyaan real-world + 1 tantangan skenario "what-if" ditambah console.table().

Saya bagi jadi 2 sub-misi biar gak numpuk:
🧩 Sub-misi 6A: Lengkapi engine-nya dulu
*/


const graph = {
    'JKT': { 'BDG': 150, 'SMG': 450, 'MDN': 1800 },
    'SBY': { 'SMG': 350, 'YOG': 300, 'MKS': 900 },
    'BDG': { 'JKT': 150, 'YOG': 400 },
    'YOG': { 'BDG': 400, 'SBY': 300, 'SMG': 130 },
    'SMG': { 'JKT': 450, 'SBY': 350, 'YOG': 130 },
    'MDN': { 'JKT': 1800, 'MKS': 2500 },
    'MKS': { 'SBY': 900, 'MDN': 2500 }
};

class PriorityQueue {
    // (pakai yang sudah kamu buat)
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

function dijkstra(graph, start, end) {
    // TODO: gabungkan semua yang sudah kamu kuasai dari Level 3
    // (boleh tambahkan early-exit kalau currentVertex === end)
    const distances = {};
    const previous = {};
    const pq = new PriorityQueue();
    
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

        for(let neighbor in graph[currentVertex]) {
            const distance =  distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                previous[neighbor] = currentVertex;
                pq.enqueue(neighbor, distance);
            }
        }
    }

    return { distances, previous };
}

function getPath(previous, start, end) {
    // TODO: dari Level 4, tapi kali ini stop juga kalau current === start
    const path = [];
    let current = end;

    while (current !== null) {
        path.unshift(current);
        if (current === start) {break};
        current = previous[current];
    }

    return path;
}



/*
Ini gabungan langsung dari Level 3 + 4, cuma ganti nama graf/kota. Seharusnya cepat buat kamu — kirim versi lengkapnya.

🧩 Sub-misi 6B: Jawab 4 pertanyaan (setelah 6A jalan)

Begitu engine-nya jalan, jawab pakai console.log:

1. Jalur terpendek Jakarta → Surabaya + total jarak
2. Jalur terpendek Medan → Yogyakarta + total jarak
3. Jalur terpendek Bandung → Makassar + total jarak
4. Skenario what-if: tambahkan jalan baru Jakarta ↔ Yogyakarta = 500 km ke graph (bukan 450 seperti di source aslinya — saya ubah dikit biar kamu bener-bener hitung ulang, bukan hafalan), lalu cek ulang jalur terpendek Jakarta → Surabaya. Apakah rutenya berubah?
*/



function solveQuestions() {
    // TESTCASE 1. Jakarta ke Surabaya
    let { distances, previous } = dijkstra(graph, 'JKT', 'SBY');
    let path = getPath(previous, 'JKT', 'SBY');
    console.log('1. Jalur terpendek Jakarta ke Surabaya:', path.join(' -> '), 'dengan jarak', distances['SBY'], 'km');
    // Expected return: Jalur terpendek Jakarta ke Surabaya: JKT -> SMG -> SBY dengan jarak 800 km

    // TESTCASE 2. Medan ke Yogyakarta
    ({ distances, previous } = dijkstra(graph, 'MDN', 'YOG'));
    path = getPath(previous, 'MDN', 'YOG');
    console.log('2. Jalur terpendek Medan ke Yogyakarta:', path.join(' -> '), 'dengan jarak', distances['YOG'], 'km');
    // Expected return: Jalur terpendek Medan ke Yogyakarta: MDN -> JKT -> BDG -> YOG dengan jarak 2350 km

    // TESTCASE 3. Bandung ke Makassar
    ({ distances, previous } = dijkstra(graph, 'BDG', 'MKS'));
    path = getPath(previous, 'BDG', 'MKS');
    console.log('3. Jalur terpendek Bandung ke Makassar:', path.join(' -> '), 'dengan jarak', distances['MKS'], 'km');
    // Expected return: Jalur terpendek Bandung ke Makassar: BDG -> YOG -> SBY -> MKS dengan jarak 1600 km

    // TESTCASE 4. Menambahkan jalan baru Jakarta ke Yogyakarta dengan jarak 450KM
    graph['JKT']['YOG'] = 450;
    graph['YOG']['JKT'] = 450;
    ({ distances, previous } = dijkstra(graph, 'JKT', 'SBY'));
    path = getPath(previous, 'JKT', 'SBY');
    console.log('4. Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya:', path.join(' -> '), 'dengan jarak', distances['SBY'], 'km');
    // Expected return: Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya: JKT -> YOG -> SBY dengan jarak 750 km
}

solveQuestions();