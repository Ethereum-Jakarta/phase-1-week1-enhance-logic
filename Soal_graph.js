// Soal 1 - Graph: Shortest Path in a Social Network
const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
};

function shortestPath(friends, start, target) {
  //code
    if (start === target) return 0;
    const queue = [[start,0]];
    const visited = new Set();
    visited.add(start);
    while (queue.length > 0) {
        const [current, depth] = queue.shift();
        for (const neighbor of friends[current]) {
            if (!visited.has(neighbor)) {
                if (neighbor === target) {
                    return depth + 1;
                }
                visited.add(neighbor);
                queue.push([neighbor, depth + 1]);
            }
        }
    }
    return -1;
}

// Testcase 1
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'Alice', 'David')); // Expected Output: 2
  
  // Testcase 2
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'Alice', 'Eve')); // Expected Output: 2
  
  // Testcase 3
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'Alice', 'Alice')); // Expected Output: 0
  
  // Testcase 4
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'David', 'Charlie')); // Expected Output: 3
  
  // Testcase 5
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'Eve', 'Bob')); // Expected Output: 1
  
  // Testcase 6
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'Charlie', 'Alice')); // Expected Output: 1
  
  // Testcase 7
  console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
  }, 'David', 'Eve')); // Expected Output: 2

  console.log('-----------------------------------');
  // soal 2 - Graph: Counting Islands
  class Graph {
  // Implementasi graph dan metode DFS
    constructor() {
        this.list = {};
    }
    addNode(value) {
        if (!this.list[value]) {
            this.list[value] = [];
        }
    }
    addEdge(v1, v2) {
        this.list[v1].push(v2);
        this.list[v2].push(v1);
    }
    dfs(start, visited) {
        visited.add(start);
        for (const neighbor of this.list[start]) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
}

function islandCount(grid) {
    const graph = new Graph();
    const rows = grid.length;
    const cols = grid[0].length;
    //console.log(rows, cols);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                const node = `${r},${c}`;
                graph.addNode(node);
                // Cek 4 arah (atas, bawah, kiri, kanan)
                const directions = [
                    [-1, 0], // atas
                    [1, 0],  // bawah
                    [0, -1], // kiri
                    [0, 1]   // kanan
                ];
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                        const neighborNode = `${nr},${nc}`;
                        graph.addNode(neighborNode);
                        graph.addEdge(node, neighborNode);
                    }
                }
            }
        }
    }
    //console.log(graph.list);
    // Hitung jumlah pulau menggunakan DFS
    const visited = new Set();
    let islandCount = 0;
    for (const key in graph.list) {
        if (!visited.has(key)) {
          //console.log(key);
            islandCount++;
            graph.dfs(key, visited);
        }
    }
    return islandCount;
}

// Testcase 1
console.log(islandCount([
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
])); // Expected Output: 1

// Testcase 2
console.log(islandCount([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
])); // Expected Output: 3

// Testcase 3
console.log(islandCount([
  [1, 1, 0, 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [1, 0, 0, 1, 1]
])); // Expected Output: 5

// Testcase 4
console.log(islandCount([
  [1, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 0, 1]
])); // Expected Output: 4

// Testcase 5
console.log(islandCount([
  [1, 1, 0, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
])); // Expected Output: 6

// Testcase 6
console.log(islandCount([
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 0, 1, 1, 0],
  [1, 1, 0, 0, 0]
])); // Expected Output: 2

// Testcase 7
console.log(islandCount([
  [1, 1, 1],
  [0, 0, 0],
  [1, 0, 1]
])); // Expected Output: 3