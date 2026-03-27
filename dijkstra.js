function shortestPathDijkstraArray(graph, start, target) {
    const numNodes = graph.length;
    const distances = new Array(numNodes).fill(Number.MAX_VALUE);
    distances[start] = 0;
  
    const visited = new Array(numNodes).fill(false);
  
    for (let i = 0; i < numNodes - 1; i++) {
      const minDistanceNode = findMinDistanceNode(distances, visited);
      visited[minDistanceNode] = true;
  
      for (let j = 0; j < numNodes; j++) {
        if (
          !visited[j] &&
          graph[minDistanceNode][j] !== -1 &&
          distances[minDistanceNode] + graph[minDistanceNode][j] < distances[j]
        ) {
          distances[j] = distances[minDistanceNode] + graph[minDistanceNode][j];
        }
      }
    }
  
    return distances[target] === Number.MAX_VALUE ? -1 : distances[target];
  }
  
  function findMinDistanceNode(distances, visited) {
    let minDistance = Number.MAX_VALUE;
    let minDistanceNode = -1;
  
    for (let i = 0; i < distances.length; i++) {
      if (!visited[i] && distances[i] < minDistance) {
        minDistance = distances[i];
        minDistanceNode = i;
      }
    }
  
    return minDistanceNode;
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
  