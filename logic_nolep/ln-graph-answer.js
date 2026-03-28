//Soal 1: Breadth - First Search(BFS)


const friends = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
};

function shortestPath(friends, start, target) {
    const visited = new Set();
    const queue = [[start, 0]];

    while (queue.length > 0) {
        let [node, steps] = queue.shift();
        console.log("check:", queue)
        if (node === target) return steps;

        console.log("node:", node)
        if (!visited.has(node)) {
            visited.add(node)

            for (let neighbor of friends[node]) {
                queue.push([neighbor, steps + 1]);
            }
        }
    }

    return -1;
}

// // Testcase 1
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'Alice', 'David')); // Expected Output: 2

// // Testcase 2
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'Alice', 'Eve')); // Expected Output: 2

// // Testcase 3
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'Alice', 'Alice')); // Expected Output: 0

// // Testcase 4
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'David', 'Charlie')); // Expected Output: 3

// // Testcase 5
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'Eve', 'Bob')); // Expected Output: 1

// // Testcase 6
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'Charlie', 'Alice')); // Expected Output: 1

// // Testcase 7
// console.log(shortestPath({
//     'Alice': ['Bob', 'Charlie'],
//     'Bob': ['Alice', 'David', 'Eve'],
//     'Charlie': ['Alice', 'Eve'],
//     'David': ['Bob'],
//     'Eve': ['Bob', 'Charlie']
// }, 'David', 'Eve')); // Expected Output: 2

// console.log(islandCount([
//     [1, 1, 0, 0, 1],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 0],
//     [1, 0, 0, 0, 0]
// ]));

// console.log(islandCount([
//     [🏝︎", 🏝︎, 🌊, 🌊, 🏝︎],
//     [🏝︎, 🏝︎, 🌊, 🌊, 🌊],
//     [🌊, 🌊, 🌊, 🏝︎, 🌊],
//     [🏝︎, 🌊, 🌊, 🌊, 🌊]
// ]));

class Graph {
    constructor(grid) {
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;

        console.log("Grid:", this.grid)
        console.log("Rows:", this.rows)
        console.log("Cols:", this.cols)

    }

    dfs(row, col) {
        //cek batas grid dan apakah sudah air(0)
        if (row < 0 || col < 0 || row >= this.rows || col >= this.cols || this.grid[row][col] === 0) {
            return;
        }

        //tandai sebagai sudah dikunjungi dengan mengubah ke 0
        this.grid[row][col] = 0;

        //DFS ke 4 arah: atas, bawah, kiri, kanan
        this.dfs(row + 1, col);
        this.dfs(row - 1, col);
        this.dfs(row, col + 1);
        this.dfs(row, col - 1);
    }
}

function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    const graph = new Graph(grid);
    let count = 0;

    for (let row = 0; row < graph.rows; row++) {

        for (let col = 0; col < graph.cols; col++) {
            if (graph.grid[row][col] === 1) {
                graph.dfs(row, col); // tenggelamkan seluruh pulau
                count++
            }
        }
    }

    return count++
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
