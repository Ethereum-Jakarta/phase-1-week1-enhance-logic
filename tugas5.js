const shortestPathDijkstraArray = (graph, start, target) => {
  const INF = Number.MAX_SAFE_INTEGER; // 9007199254740991 atau jarak tak terhingga untuk inisialisasi
  const distances = {}; // Menyimpan jarak terpendek dari start ke setiap simpul
  const object = {}; // Mengalokasikan setiap i dan j
  const visited = new Set(); // Menandai simpul yang sudah dikunjungi
  const queue = [];

  // Pengisian object
  for (let i = 0; i < graph.length; i++) {
    if (i !== INF) {
      object[i] = [];
    }
  }

  for (let i = 0; i < graph.length; i++) {
    if (i !== INF) {
      for (let j = 0; j < graph[i].length; j++) {
        if (graph[i][j] !== -1 && !object[j].some((edge) => edge.node === i)) {
          object[i].push({
            node: j,
            weight: graph[i][j],
          });
        }
      }
    }
  }

  for (const node in object) {
    distances[node] = INF;
  }

  distances[start] = 0; // Jarak dari start ke start adalah 0
  queue.push([start, 0]);
  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]); // Urutkan berdasarkan jarak terpendek
    const [currentNode, currentDistance] = queue.shift(); // Ambil simpul dengan jarak terpendek dari queue

    if (visited.has(currentNode)) {
      continue;
    }

    visited.add(currentNode);
    for (const {node: neighbor, weight} of object[currentNode]) {
      const totalDistance = currentDistance + weight;
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        queue.push([neighbor, totalDistance])
      }
    }
  } 
  return distances[target] !== INF ? distances[target] : -1
};

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
