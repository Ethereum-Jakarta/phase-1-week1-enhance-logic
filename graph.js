/*
Soal 1: Breadth - First Search(BFS)
Judul: Shortest Path Friends

Deskripsi:

Anda diberikan daftar teman - teman dalam bentuk objek dengan struktur sebagai berikut:

const friends = {
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
};


Objek friends ini menggambarkan hubungan pertemanan antara beberapa orang.Setiap kunci dalam objek tersebut adalah nama seseorang, dan nilai yang terkait adalah daftar teman - teman orang tersebut.

Sebagai contoh, untuk orang Alice, teman - temannya adalah Bob dan Charlie.Untuk orang Bob, teman - temannya adalah Alice, David, dan Eve, dan seterusnya.

Tugas Anda adalah mengimplementasikan fungsi shortestPath(friends, start, target) yang akan menghitung panjang jalur terpendek dari teman start ke teman target menggunakan algoritma BFS(Breadth - First Search).Ini berarti Anda akan mencari jalur yang melibatkan teman - teman secara berurutan dari start ke target.

Jika tidak ada jalur yang menghubungkan start dan target, maka fungsi harus mengembalikan nilai - 1.

Sebagai contoh, dalam objek friends yang diberikan di atas, jika Anda ingin mencari jalur terpendek dari Alice ke David, Anda akan menemukan bahwa jalur terpendek adalah Alice -> Bob -> David, yang memiliki panjang 2.
*/

function shortestPath(friends, start, target) {
    //code
    if (start === target) {
        return 0
    }

    const queue = [start]
    const visited = new Set()
    const distances = { [start]: 0 }

    while (queue.length > 0) {
        const person = queue.shift()

        for (const friend of friends[person]) {
            if (!visited.has(friend)) {
                queue.push(friend)
                visited.add(friend)
                distances[friend] = distances[person] + 1

                if (friend === target) {
                    return distances[friend]
                }
            }
        }
    }

    return -1
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

/*
Soal 2: Depth - First Search(DFS)
Judul: Island Count

Deskripsi:
Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air.Anda perlu menghitung jumlah pulau yang ada di peta.Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.
*/

class Graph {
    // Implementasi graph dan metode DFS
    constructor(rows, cols, grid) {
        this.rows = rows
        this.cols = cols
        this.grid = grid
        this.visited = new Array(rows).fill(null).map(() => new Array(cols).fill(false))
        this.directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    }

    isValid(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols
    }

    dfs(row, col) {
        if (!this.isValid(row, col) || this.grid[row][col] === 0 || this.visited[row][col]) {
            return
        }

        this.visited[row][col] = true
        for (const [dr, dc] of this.directions) {
            this.dfs(row + dr, col + dc)
        }
    }

    countIslands() {
        let islandCount = 0
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.grid[row][col] === 1 && !this.visited[row][col]) {
                    islandCount++
                    this.dfs(row, col)
                }
            }
        }
        return islandCount
    }
}

function islandCount(grid) {
    // Implementasi DFS untuk menghitung jumlah pulau
    const rows = grid.length
    const cols = grid[0].length
    const graph = new Graph(rows, cols, grid)

    return graph.countIslands();
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