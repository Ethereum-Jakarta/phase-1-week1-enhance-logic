function shortestPathDijkstraArray(graph, start, target) {
    // code
    const INF = Number.MAX_SAFE_INTEGER;
    const distance = {}
    const visited  = new Set()
    const queue = [[start, 0]]

    for(const node in graph) {
        distance[node] = INF;
    }

    while(queue.length > 0) {
        queue.sort((a, b) => a[1] - b[1])
        const [currentNode, currentDistance] = queue.shift();

        if(visited.has(currentNode)) {
            continue;
        }

        visited.add(currentNode)

        for (const neighbor in graph[currentNode]) {
            if(graph[currentNode][neighbor] !== -1) {
                const totalDistance = currentDistance + graph[currentNode][neighbor]
                
                if (totalDistance < distance[neighbor]) {
                  distance[neighbor] = totalDistance;
                  queue.push([neighbor, totalDistance]); // Masukkan simpul tetangga ke priority queue
                }
            }

            // Update jarak terpendek jika totalDistance lebih kecil dari jarak sebelumnya
          }
    }
    return distance[target] !== Infinity ? distance[target] : -1
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