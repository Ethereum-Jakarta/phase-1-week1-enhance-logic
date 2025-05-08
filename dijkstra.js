function shortestPathDijkstraArray(graph, start, target) {
  // buat graph biar lebih rapi
  let graphObj = {};
  for (let i = 0; i < graph.length; i++) {
    graphObj[i] = {};
    for (let j = 0; j < graph[i].length; j++) {
      if (graph[i][j] >= 0) {
        graphObj[i][j] = graph[i][j];
      }
    }
  }

  // buat var penting
  const INF = Number.MAX_SAFE_INTEGER;
  let distances = {};
  let visited = new Set();
  let queue = [];

  // buat object distances
  for (const node in graphObj) {
    distances[node] = node === start + "" ? 0 : INF;
    queue.push({ node, distance: distances[node] });
  }

  // loop utama
  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { node } = queue.shift();
    if (visited.has(node)) {
      continue;
    }
    visited.add(node);

    for (const neighbor in graphObj[node]) {
      const distance = distances[node] + graphObj[node][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.push({ node: neighbor, distance });
      }
    }
  }
  return distances[target];
}

//! TESTCASE !\\

// Testcase 1
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    2
  )
); // Expected Output: 4

// Testcase 2
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 6

// Testcase 3
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 3, -1, -1, -1],
      [3, -1, 1, 1, -1],
      [-1, 1, -1, -1, -1],
      [-1, 1, -1, -1, 2],
      [-1, -1, -1, 2, -1],
    ],
    1,
    3
  )
); // Expected Output: 1

// Testcase 4
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 2, -1, -1, -1],
      [2, -1, 1, -1, 3],
      [-1, 1, -1, 4, -1],
      [-1, -1, 4, -1, 2],
      [-1, 3, -1, 2, -1],
    ],
    0,
    4
  )
); // Expected Output: 5

// Testcase 5
console.log(
  shortestPathDijkstraArray(
    [
      [-1, 1, 2, -1],
      [1, -1, -1, 3],
      [2, -1, -1, -1],
      [-1, 3, -1, -1],
    ],
    0,
    3
  )
); // Expected Output: 4
