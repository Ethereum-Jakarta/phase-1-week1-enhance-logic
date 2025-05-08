function shortestPathDijkstraArray(graph, start, target) {
    const n = graph.length
    const distances = Array(n).fill(Infinity)

    distances[start] = 0

    const priorityQueue = [{ node: start, distance: 0 }]

    while (priorityQueue.length > 0) {
        const { node, distance } = priorityQueue.shift()

        if (distance > distances[node]) {
            continue
        }

        for (let neighbor = 0; neighbor < n; neighbor++) {
            if (graph[node][neighbor] !== -1) {
                const newDistance = distances[node] + graph[node][neighbor]

                if (newDistance < distances[neighbor]) {
                    distances[neighbor] = newDistance
                    priorityQueue.push({ node: neighbor, distance: newDistance })

                    priorityQueue.sort((a, b) => a.distance - b.distance)
                }
            }
        }
    }

    return distances[target]
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