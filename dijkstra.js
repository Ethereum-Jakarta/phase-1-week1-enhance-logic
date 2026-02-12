function shortestPathDijkstraArray(graph, start, target) {
  // code
  const distances = {};
  const visited = new Set();
  const queue = [[start, 0]];

  for (const node in graph) {
    distances[node] = node == start ? 0 : Infinity;
  }

  while (queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);

    const [node, jarak] = queue.shift();

    if (visited.has(node)) {
      continue;
    }
    visited.add(node);

    for (const neighbor in graph[node]) {
      if (graph[node][neighbor] !== -1) {
        const totalDistance = jarak + graph[node][neighbor];

        if (totalDistance < distances[neighbor]) {
          distances[neighbor] = totalDistance;
          queue.push([neighbor, totalDistance]);
        }
      }
    }
  }
  return distances[target] !== Infinity ? distances[target] : -1;
}

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
