function shortestPathDijkstraArray(array2d: number[][], from: number, to: number) {
  const distances = [] as number[];
  const visited = new Set<number>();
  const queue = [] as { node: number, distance: number }[];

  for (let i = 0; i < array2d.length; i++) {
    distances.push(i === from ? 0 : Number.MAX_SAFE_INTEGER);
    queue.push({ node: i, distance: distances[i]});
  }

  while(queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { node } = queue.shift()!;

    if (visited.has(node)) continue;
    else visited.add(node);

    for (let neighbor = 0; neighbor < array2d.length; neighbor++) {
      if (array2d[node][neighbor] === -1) continue;
      const distance = distances[node] + array2d[node][neighbor];
      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        queue.push({ node: neighbor, distance });
      }
    }
  }
  return distances[to];
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
