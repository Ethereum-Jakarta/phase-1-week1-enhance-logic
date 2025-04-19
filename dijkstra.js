function shortestPathDijkstraArray(graph, start, target) {
    const n = graph.length,
        distances = new Array(n).fill(Infinity),
        visited = new Array(n).fill(false);
    distances[start] = 0;

    for (let i = 0; i < n; i++) {
        let minDistance = Infinity,
            u = -1;

        for (let v = 0; v < n; v++) {
            if (visited[v]) continue;

            if (distances[v] < minDistance) {
                minDistance = distances[v];
                u = v;
            }
        }

        visited[u] = true;

        for (let v = 0; v < n; v++) {
            if (visited[v] || graph[u][v] === -1) continue;

            const distance = distances[u] + graph[u][v];
            const isSmallerThanCurrentDistance = distance < distances[v];

            if (isSmallerThanCurrentDistance) {
                distances[v] = distance;
            }
        }
    }

    return distances[target] ? distances[target] : -1;
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
console.log("");

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
console.log("");

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
console.log("");

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
console.log("");

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
