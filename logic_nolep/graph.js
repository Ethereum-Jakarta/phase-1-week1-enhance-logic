// class Graph {
//   constructor() {
//     this.nodes = new Map();
//   }

//   addNode(value) {
//     this.nodes.set(value, new Node(value));
//   }

//   addEdge(source, destination) {
//     if (!this.nodes.has(source) || !this.nodes.has(destination)) {
//       throw new Error("Source or destination node does not exist.");
//     }
//     const sourceNode = this.nodes.get(source);
//     const destinationNode = this.nodes.get(destination);
//     sourceNode.addEdge(destinationNode);
//   }

//   removeNode(value) {
//     const nodeToRemove = this.nodes.get(value);
//     if (!nodeToRemove) return;

//     for (const node of this.nodes.values()) {
//       node.removeEdge(nodeToRemove);
//     }

//     this.nodes.delete(value);
//   }

//   removeEdge(source, destination) {
//     const sourceNode = this.nodes.get(source);
//     const destinationNode = this.nodes.get(destination);
//     if (!sourceNode || !destinationNode) return;

//     sourceNode.removeEdge(destinationNode);
//   }

//   // Breadth-First Search
//   bfs(startValue, targetValue) {
//     const visited = new Set();
//     const queue = [];
//     queue.push(this.nodes.get(startValue));

//     while (queue.length > 0) {
//       const currentNode = queue.shift();
//       if (currentNode.value === targetValue) return true;

//       visited.add(currentNode);
//       for (const neighbor of currentNode.edges) {
//         if (!visited.has(neighbor)) {
//           queue.push(neighbor);
//         }
//       }
//     }

//     return false;
//   }

//   // Depth-First Search
//   dfs(startValue, targetValue, visited = new Set()) {
//     if (visited.has(startValue)) return false;

//     visited.add(startValue);
//     if (startValue === targetValue) return true;

//     const startNode = this.nodes.get(startValue);
//     for (const neighbor of startNode.edges) {
//       if (this.dfs(neighbor.value, targetValue, visited)) {
//         return true;
//       }
//     }

//     return false;
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.edges = [];
//   }

//   addEdge(node) {
//     this.edges.push(node);
//   }

//   removeEdge(node) {
//     const index = this.edges.indexOf(node);
//     if (index !== -1) {
//       this.edges.splice(index, 1);
//     }
//   }
// }
// # LOGIC NOLEP (graph.js)

// ## Soal 1: Breadth-First Search (BFS)

// **Judul**: Shortest Path Friends

// **Deskripsi**:

// Anda diberikan daftar teman-teman dalam bentuk objek dengan struktur sebagai berikut:

// ```js
const friends = {
  Alice: ["Bob", "Charlie"],
  Bob: ["Alice", "David", "Eve"],
  Charlie: ["Alice", "Eve"],
  David: ["Bob"],
  Eve: ["Bob", "Charlie"],
};
// ```

// Objek `friends` ini menggambarkan hubungan pertemanan antara beberapa orang. Setiap kunci dalam objek tersebut adalah nama seseorang, dan nilai yang terkait adalah daftar teman-teman orang tersebut.

// Sebagai contoh, untuk orang `Alice`, teman-temannya adalah `Bob` dan `Charlie`. Untuk orang `Bob`, teman-temannya adalah `Alice`, `David`, dan `Eve`, dan seterusnya.

// Tugas Anda adalah mengimplementasikan fungsi `shortestPath(friends, start, target)` yang akan menghitung panjang jalur terpendek dari teman `start` ke teman `target` menggunakan algoritma BFS (Breadth-First Search). Ini berarti Anda akan mencari jalur yang melibatkan teman-teman secara berurutan dari `start` ke `target`.

// Jika tidak ada jalur yang menghubungkan `start` dan `target`, maka fungsi harus mengembalikan nilai `-1`.

// Sebagai contoh, dalam objek friends yang diberikan di atas, jika Anda ingin mencari jalur terpendek dari Alice ke David, Anda akan menemukan bahwa jalur terpendek adalah Alice -> Bob -> David, yang memiliki panjang 2.

// ```js
function shortestPath(friends, start, target) {
  //code
  const visited = new Set();
  const queue = [];
  queue.push([start, 0]);

  while (queue.length > 0) {
    const currentNode = queue.shift();
    const [current, distance] = currentNode;
    if (current === target) return distance;

    visited.add(currentNode);
    for (const neighbor of friends[current]) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return false;
}

// Testcase 1
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "David"
  )
); // Expected Output: 2

// Testcase 2
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Eve"
  )
); // Expected Output: 2

// Testcase 3
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Alice",
    "Alice"
  )
); // Expected Output: 0

// Testcase 4
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Charlie"
  )
); // Expected Output: 3

// Testcase 5
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Eve",
    "Bob"
  )
); // Expected Output: 1

// Testcase 6
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "Charlie",
    "Alice"
  )
); // Expected Output: 1

// Testcase 7
console.log(
  shortestPath(
    {
      Alice: ["Bob", "Charlie"],
      Bob: ["Alice", "David", "Eve"],
      Charlie: ["Alice", "Eve"],
      David: ["Bob"],
      Eve: ["Bob", "Charlie"],
    },
    "David",
    "Eve"
  )
); // Expected Output: 2
// ```

console.log(`-------------------  DFS ------------------------`);

// ## Soal 2: Depth-First Search (DFS)
// **Judul**: Island Count

// **Deskripsi**:
// Anda diberikan sebuah peta yang direpresentasikan dalam bentuk matriks grid, di mana "1" mewakili daratan dan "0" mewakili air.
//  Anda perlu menghitung jumlah pulau yang ada di peta. Pulau adalah area yang terdiri dari daratan yang saling berdekatan secara horizontal atau vertikal.

// ```js
class Graph {
  constructor(grid) {
    this.grid = grid;
    this.rows = grid.length;
    this.cols = grid[0].length;
    this.visited = new Set();
  }

  bfs(startRow = 0, startCol = 0) {
    const directions = [
      [1, 0], // bawah
      [-1, 0], // atas
      [0, 1], // kanan
      [0, -1], // kiri
    ];
    const queue = [[startRow, startCol]];
    this.visited.add(`${startRow},${startCol}`);
    while (queue.length > 0) {
      const [row, col] = queue.shift();

      for (const [dr, dc] of directions) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (
          newRow >= 0 &&
          newRow < this.rows &&
          newCol >= 0 &&
          newCol < this.cols &&
          this.grid[newRow][newCol] === 1 &&
          !this.visited.has(`${newRow},${newCol}`)
        ) {
          this.visited.add(`${newRow},${newCol}`);
          queue.push([newRow, newCol]);
        }
      }
    }
  }

  getCount() {
    let count = 0;
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.grid[r][c] === 1 && !this.visited.has(`${r},${c}`)) {
          this.bfs(r, c);
          count++;
        }
      }
    }

    return count;
  }
}

// Contoh:
// ```js
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0],
  ])
); // Expected Output: 4
// ```

// jika di gambarkan seperti ini:
// ```js
// console.log(islandCount([
//   [🏝︎, 🏝︎, 🌊, 🌊, 🏝︎],
//   [🏝︎, 🏝︎, 🌊, 🌊, 🌊],
//   [🌊, 🌊, 🌊, 🏝︎, 🌊],
//   [🏝︎, 🌊, 🌊, 🌊, 🌊]
// ]));
// ```

// Tuliskan sebuah fungsi yang mengambil input berupa matriks grid dan mengembalikan jumlah pulau yang ada.

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  const grapNew = new Graph(grid);

  return grapNew.getCount();
}

// Testcase 1
console.log(
  islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ])
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ])
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ])
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ])
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ])
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ])
); // Expected Output: 3
// ```
