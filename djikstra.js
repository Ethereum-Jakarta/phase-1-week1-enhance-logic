/*
Deskripsi Soal:

Kalian diminta untuk mengimplementasikan fungsi shortestPathDijkstraArray yang akan menghitung jarak terpendek antara dua simpul pada sebuah graph berbobot dengan bobot non - negatif.Graph tersebut direpresentasikan dalam bentuk array dua dimensi yang menyatakan bobot antara simpul - simpul.Elemen graph[i][j] pada array merepresentasikan bobot dari simpul i ke simpul j.Jika tidak ada sisi yang menghubungkan simpul i dan j, maka graph[i][j] akan bernilai - 1.

Tugas:

Implementasikan fungsi shortestPathDijkstraArray dengan tiga parameter:

graph(array): Representasi graph berbobot dalam bentuk array dua dimensi.

start(number): Nomor simpul awal.

target(number): Nomor simpul tujuan.

Fungsi shortestPathDijkstraArray harus mengembalikan jarak terpendek dari simpul start ke simpul target dalam graph berbobot yang diberikan.Jika tidak ada jalur yang memungkinkan, fungsi harus mengembalikan nilai - 1.

Contoh:

Misalkan terdapat graph berbobot berikut:
Graph:
0 --3-- 1 --1-- 2
    |        |
    4 --2-- 3


Graph tersebut dapat direpresentasikan dalam bentuk array dua dimensi sebagai berikut:
const graph = [
    [-1, 3, -1, -1, -1],
    [3, -1, 1, 1, -1],
    [-1, 1, -1, -1, -1],
    [-1, 1, -1, -1, 2],
    [-1, -1, -1, 2, -1]
];


Jika kita ingin mencari jarak terpendek dari simpul 0 ke simpul 2, maka fungsi shortestPathDijkstraArray(graph, 0, 2) harus mengembalikan nilai 4.

Note:

Pastikan Anda menggunakan Dijkstra's Algorithm untuk mencari jarak terpendek pada graph berbobot.
*/
function shortestPathDijkstraArray(graph, start, target) {
    // code
    const INF = Number.MAX_SAFE_INTEGER; // Jarak tak terhingga untuk inisialisasi
    const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
    const visited = new Set(); // Menandai simpul yang sudah dikunjungi
    const priorityQueue = []; // Priority queue sederhana

    // Inisialisasi jarak dari start ke semua simpul dengan tak terhingga
    for (const node in graph) {
        distances[node] = INF;
    }

    distances[start] = 0; // Jarak dari start ke start adalah 0
    priorityQueue.push([start, 0]); // Masukkan simpul start ke priority queue dengan jarak 0

    // Loop hingga priority queue kosong
    while (priorityQueue.length > 0) {
        priorityQueue.sort((a, b) => a[1] - b[1]); // Urutkan berdasarkan jarak terpendek
        const [currentNode, currentDistance] = priorityQueue.shift(); // Ambil simpul dengan jarak terpendek dari priority queue

        if (visited.has(currentNode)) {
            continue; // Lewati jika simpul sudah dikunjungi sebelumnya
        }

        visited.add(currentNode); // Tandai simpul sebagai dikunjungi

        // Iterasi melalui tetangga dari simpul saat ini
        for (const item in graph[currentNode]) {
            if (graph[currentNode][item] !== -1) {
                const totalDistance = currentDistance + graph[currentNode][item];

                // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
                if (totalDistance < distances[item]) {
                    distances[item] = totalDistance;
                    priorityQueue.push([item, totalDistance]);
                }
            }
        }
    }

    // Kembalikan jarak terpendek dari start ke target, jika tidak ada jalur, kembalikan -1
    return distances[target] !== INF ? distances[target] : -1;
}

// Testcase 1
console.log(shortestPathDijkstraArray(
    [
        [-1, 3, -1, -1, -1],
        [3, -1, 1, 1, -1],
        [-1, 1, -1, -1, -1],
        [-1, 1, -1, -1, 2],
        [-1, -1, -1, 2, -1]
    ],
    0,
    2
)); // Expected Output: 4

// Testcase 2
console.log(shortestPathDijkstraArray(
    [
        [-1, 3, -1, -1, -1],
        [3, -1, 1, 1, -1],
        [-1, 1, -1, -1, -1],
        [-1, 1, -1, -1, 2],
        [-1, -1, -1, 2, -1]
    ],
    0,
    4
)); // Expected Output: 6

// Testcase 3
console.log(shortestPathDijkstraArray(
    [
        [-1, 3, -1, -1, -1],
        [3, -1, 1, 1, -1],
        [-1, 1, -1, -1, -1],
        [-1, 1, -1, -1, 2],
        [-1, -1, -1, 2, -1]
    ],
    1,
    3
)); // Expected Output: 1

// Testcase 4
console.log(shortestPathDijkstraArray(
    [
        [-1, 2, -1, -1, -1],
        [2, -1, 1, -1, 3],
        [-1, 1, -1, 4, -1],
        [-1, -1, 4, -1, 2],
        [-1, 3, -1, 2, -1]
    ],
    0,
    4
)); // Expected Output: 5

// Testcase 5
console.log(shortestPathDijkstraArray(
    [
        [-1, 1, 2, -1],
        [1, -1, -1, 3],
        [2, -1, -1, -1],
        [-1, 3, -1, -1]
    ],
    0,
    3
)); // Expected Output: 4