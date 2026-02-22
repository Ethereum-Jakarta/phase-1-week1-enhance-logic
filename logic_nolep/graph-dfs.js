class Graph {
  // Implementasi graph dan metode DFS
    constructor() {
        this.adjacencyList = {};
    }
    addNode(node) {
        if (!this.adjacencyList[node]) {
            this.adjacencyList[node] = [];
        }
    }
    addEdge(node1, node2) {
        if (!this.adjacencyList[node1]) this.addNode(node1);
        if (!this.adjacencyList[node2]) this.addNode(node2);
        this.adjacencyList[node1].push(node2);
        this.adjacencyList[node2].push(node1); // asumsi graph tidak berarah
    }
    dfs(start, visited = new Set()) {
        if (!this.adjacencyList[start]) return [];
        visited.add(start);
        let result = [start];
        for (let neighbor of this.adjacencyList[start]) {
            if (!visited.has(neighbor)) {
                result = result.concat(this.dfs(neighbor, visited));
            }
        }
        return result;
    }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
    const rows = grid.length;
    const cols = grid[0].length;
    const graph = new Graph();

    // menambahkan node untuk setiap sel yang bernilai '1'
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                graph.addNode(`${r},${c}`);
            }
        }
    }
    //console.log(graph)

    // menambahkan edge untuk setiap sel yang bernilai '1' yang bertetangga (atas, bawah, kiri, kanan)
    const directions = [
        [-1, 0], // atas
        [1, 0],  // bawah
        [0, -1], // kiri
        [0, 1]   // kanann
    ];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                for (const [dr, dc] of directions) {
                    const nr = r + dr, nc = c + dc;
                    if (
                        nr >= 0 && nr < rows &&
                        nc >= 0 && nc < cols &&
                        grid[nr][nc] === 1
                    ) {
                        graph.addEdge(`${r},${c}`, `${nr},${nc}`);
                    }
                }
            }
        }
    }
    // console.log(graph)

    // hitung jumlah connected component (pulau)
    const visited = new Set();
    let count = 0;
    for (let node in graph.adjacencyList) {
        if (!visited.has(node)) {
            graph.dfs(node, visited);
            count++;
        }
    }
    return count;
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