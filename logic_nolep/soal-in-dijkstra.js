// Definisi graf
const graph = {
    'JKT': { 'BDG': 150, 'SMG': 450, 'MDN': 1800 },
    'SBY': { 'SMG': 350, 'YOG': 300, 'MKS': 900 },
    'BDG': { 'JKT': 150, 'YOG': 400 },
    'YOG': { 'BDG': 400, 'SBY': 300, 'SMG': 130 },
    'SMG': { 'JKT': 450, 'SBY': 350, 'YOG': 130 },
    'MDN': { 'JKT': 1800, 'MKS': 2500 },
    'MKS': { 'SBY': 900, 'MDN': 2500 }
};

// Implementasi Priority Queue sederhana
class PriorityQueue {
    constructor() {
        this.elements = [];
    }
    enqueue(element, priority) {
        this.elements.push({element, priority});
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
    // Tulis Code untuk 
    // Inisialisasi jarak
    for (const vertex in graph) {
        distances[vertex] = Infinity; // Set jarak ke semua vertex sebagai tak terhingga
        previous[vertex] = null; // Tidak ada vertex sebelumnya
    }
    distances[start] = 0; // Jarak ke simpul awal adalah 0
    pq.enqueue(start, 0); // Masukkan simpul awal ke dalam queue

    while (!pq.isEmpty()) {
        const currentVertex = pq.dequeue();

        // Jika mencapai simpul tujuan, keluar dari loop
        if (currentVertex === end) break;

        for (const neighbor in graph[currentVertex]) {
            const distance = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + distance;

            // Jika jarak total lebih kecil dari jarak yang sudah ada, perbarui
            if (totalDistance < distances[neighbor]) {
                distances[neighbor] = totalDistance;
                previous[neighbor] = currentVertex; // Catat simpul sebelumnya
                pq.enqueue(neighbor, totalDistance); // Tambahkan ke queue
            }
        }
    }

    return { distances, previous };
}

// Fungsi untuk mendapatkan jalur
function getPath(previous, start, end) {
    const path = [];
    // Tulis code untuk mendapatkan jalur di sini
    for (let at = end; at !== null; at = previous[at]) {
        path.push(at); // Tambahkan simpul ke jalur
    }
    path.reverse(); // Balikkan jalur agar urut dari start ke end

    return path;
}

// Fungsi untuk menyelesaikan soal
// FUNCTION DI BAWAH TIDAK BOLEH DI UBAH
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

    // TESTCASE 4. Menambahkan jalan baru Jakarta ke Yogyakarta dengan jarak 500KM
    graph['JKT']['YOG'] = 450;
    graph['YOG']['JKT'] = 450;
    ({ distances, previous } = dijkstra(graph, 'JKT', 'SBY'));
    path = getPath(previous, 'JKT', 'SBY');
    console.log('4. Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya:', path.join(' -> '), 'dengan jarak', distances['SBY'], 'km');
    // Expected return: Setelah penambahan jalan baru, jalur terpendek Jakarta ke Surabaya: JKT -> YOG -> SBY dengan jarak 750 km
}

// Menjalankan solusi
solveQuestions();
