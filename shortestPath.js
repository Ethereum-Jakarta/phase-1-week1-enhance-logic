function shortestPathDijkstraArray(graph, start, destination) {
  const numNodes = graph.length;
  const node = new Array(numNodes).fill(Infinity);
  const visited = new Array(numNodes).fill(false);
  node[start] = 0;

  for (let i = 0; i < numNodes; i++) {
    const currentNode = getClosestNode(node, visited);
    visited[currentNode] = true;
    for (let neighbor = 0; neighbor < numNodes; neighbor++) {
      if (!visited[neighbor] && graph[currentNode][neighbor] !== -1) {
        const newDistance = node[currentNode] + graph[currentNode][neighbor];
        if (newDistance < node[neighbor]) {
          node[neighbor] = newDistance;
        }
      }
    }
  }

  return node[destination];
}

function getClosestNode(node, visited) {
  let minNode = Infinity;
  let closestNode = null;
  for (let i = 0; i < node.length; i++) {
    if (!visited[i] && node[i] < minNode) {
      minNode = node[i];
      closestNode = i;
    }
  }
  return closestNode;
}


// Testcase 1
console.log('Testcase 1')
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
console.log('\nTestcase 2')
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
console.log('\nTestcase 3')
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
console.log('\nTestcase 4')
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
console.log('\nTestcase 5')
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