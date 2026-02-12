function shortestPathWeightedGraph(graph, start, target) {
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
      for (const { node: neighbor, weight } of graph[currentNode]) {
        const totalDistance = currentDistance + weight;
        // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          priorityQueue.push([neighbor, totalDistance]); // Masukkan simpul tetangga ke priority queue
        }
      }
    }
  
    // Kembalikan jarak terpendek dari start ke target, jika tidak ada jalur, kembalikan -1
    return distances[target] !== INF ? distances[target] : -1;
  }
  
  // Implementasi Dijkstra's Algorithm dimulai dari fungsi shortestPathWeightedGraph
  // yang menerima graph berbobot, simpul awal, dan simpul tujuan. Kode tersebut
  // melakukan inisialisasi variabel dan priority queue, lalu iterasi melalui simpul-simpul
  // untuk mencari jarak terpendek dari start ke target.
  // Setelah selesai, fungsi mengembalikan jarak terpendek atau -1 jika tidak ada jalur.
  
  // Testcase 1
  console.log(shortestPathWeightedGraph({
    // Visualisasi graph:
    //   A --3-- B --1-- C --2-- D
    'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
    'B': [{ node: 'C', weight: 1 }, { node: 'D', weight: 4 }],
    'C': [{ node: 'D', weight: 2 }],
    'D': []
  }, 'A', 'D')); // Output: 4
  
  // Testcase 2
  console.log(shortestPathWeightedGraph({
    // Visualisasi graph:
    //   A --3-- B --1-- C --2-- D
    'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
    'B': [{ node: 'C', weight: 1 }, { node: 'D', weight: 4 }],
    'C': [{ node: 'D', weight: 2 }],
    'D': []
  }, 'B', 'D')); // Output: 3
  
  // Testcase 3
  console.log(shortestPathWeightedGraph({
    // Visualisasi graph:
    //   A --3-- B --1-- C --2-- D
    'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
    'B': [{ node: 'C', weight: 1 }, { node: 'D', weight: 4 }],
    'C': [{ node: 'D', weight: 2 }],
    'D': []
  }, 'A', 'A')); // Output: 0
  
  // Testcase 4
  console.log(shortestPathWeightedGraph({
    // Visualisasi graph:
    //   A --3-- B --1-- C --2-- D
    'A': [{ node: 'B', weight: 3 }, { node: 'C', weight: 2 }],
    'B': [{ node: 'C', weight: 1 }, { node: 'D', weight: 4 }],
    'C': [{ node: 'D', weight: 2 }],
    'D': []
  }, 'C', 'B')); // Output: -1