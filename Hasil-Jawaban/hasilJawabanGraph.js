// Soal 1

const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
};

function shortestPath(friends, start, target) {
    let queue = [{node: start, dist: 0}];
    let visited = new Set([start]);

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.node === target) {
            return current.dist;
        }

        let neighbors = friends[current.node];

        for (let neighboor of neighbors) {
            if (!visited.has(neighboor)) {
                visited.add(neighboor);
                queue.push({node: neighboor, dist: current.dist + 1});
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




/*

## Soal 2: Depth-First Search (DFS)
**Judul**: Island Count

**Deskripsi**:
Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air. Anda perlu menghitung jumlah pulau yang ada di peta. Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

Contoh:
```js
console.log(islandCount([
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0]
])); 
```

jika di gambarkan seperti ini:
```js
console.log(islandCount([
  [🏝︎, 🏝︎, 🌊, 🌊, 🏝︎],
  [🏝︎, 🏝︎, 🌊, 🌊, 🌊],
  [🌊, 🌊, 🌊, 🏝︎, 🌊],
  [🏝︎, 🌊, 🌊, 🌊, 🌊]
])); 
```

Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.

```js
class Graph {
  // Implementasi graph dan metode DFS
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
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

*/

console.log("\n\n\n")

class Graph {
  // Implementasi graph dan metode DFS
  constructor(grid) {
    this.grid = grid;
  }

  isValid(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] == 1;
  }

  dfs(grid, row, col) {
    if (!this.isValid(grid, row, col)) {
      return;
    }
  
  grid[row][col] = 0;
  this.dfs(grid, row - 1, col);
  this.dfs(grid, row + 1, col);
  this.dfs(grid, row, col - 1);
  this.dfs(grid, row, col + 1);
  }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  let ClassGraph = new Graph(grid);
  let jumlahPulau = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let q = 0; q < grid[0].length; q++) {
      if (grid[i][q] === 1) {
        ClassGraph.dfs(grid, i, q);
        jumlahPulau++;
      }
    }
  }
  return jumlahPulau
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
