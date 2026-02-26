class Graph {
  // Implementasi graph dan metode DFS
  constructor() {
    this.nodes = new Map();
    this.visited = new Set();
  }

  addNode(node) {
    this.nodes.set(node, []);
  }

  addEdge(source, destinationNode) {
    if(!this.nodes.has(source)) {
      throw new Error("Source or Destination node does not exist ")
    }

    const sourceNode = this.nodes.get(source);
    sourceNode.push(destinationNode)
  }

  cekNeighbor(matrix, source, row, column) {
    if (
      row < 0 ||
      column < 0 ||
      row >= matrix.length ||
      column >= matrix[0].length
    ) {
      return false;
    } else if (matrix[row][column] == 0) {
      return false;
    } else {
      const neighbor = `${row}-${column}`;
      this.addEdge(source, neighbor)
    }
  }
 
  dfs(startvalue) {
    if(this.visited.has(startvalue)) return false;

    this.visited.add(startvalue);

    const currentNode = this.nodes.get(startvalue);

    for(const neighbor of currentNode) {
      if(this.dfs(neighbor)) {
        return true;
      }
    }

    return false;
  }



  // dfs(matrix, row, column) {
  //   if (
  //     row < 0 ||
  //     column < 0 ||
  //     row >= matrix.length ||
  //     column >= matrix[0].length
  //   ) {
  //     return false;
  //   } else if (matrix[row][column] == 0) {
  //     return false;
  //   } else {
  //     matrix[row][column] = 0;

  //     // kanan
  //     dfs(matrix, row, column + 1);
  //     // kiri
  //     dfs(matrix, row, column - 1);
  //     // atas
  //     dfs(matrix, row - 1, column);
  //     // bawah
  //     dfs(matrix, row + 1, column);
  //   }
  // }
}

function islandCount(grid) {
  // Implementasi DFS untuk menghitung jumlah pulau
  let counter = 0;
  const graph = new Graph();

  // convert grid to adjacency list
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] == 1) {
        const node = `${row}-${column}`
        graph.addNode(node);
        graph.cekNeighbor(grid, node, row, column + 1)
        graph.cekNeighbor(grid, node, row, column - 1)
        graph.cekNeighbor(grid, node, row - 1, column)
        graph.cekNeighbor(grid, node, row + 1, column)
      }
    }
  }

  // panggil dfs
  for (const node of graph.nodes.keys()) {
    if(!graph.visited.has(node)) {
      counter++;
      graph.dfs(node);
    }
  }
  return counter;
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
