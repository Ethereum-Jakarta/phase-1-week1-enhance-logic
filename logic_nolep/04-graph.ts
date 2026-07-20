class Graph {
  nodes: Map<any, TNode>;
  length: number = 0;

  constructor() {
    this.nodes = new Map();
  }

  addNode(value: any) {
    this.nodes.set(value, new TNode(value));
    this.length++;
  }

  addEdge(source: any, destination: any) {
    if (!this.nodes.has(source) || !this.nodes.has(destination)) {
      throw new Error("Source or destination node does not exist.");
    }
    const sourceNode = this.nodes.get(source)!;
    const destinationNode = this.nodes.get(destination)!;
    sourceNode.addEdge(destinationNode);
  }
}

class TNode {
  public value: any;
  public edges: TNode[];
  constructor(value: any) {
    this.value = value;
    this.edges = [];
  }

  addEdge(node: TNode) {
    this.edges.push(node);
  }

  removeEdge(node: TNode) {
    const index = this.edges.indexOf(node);
    if (index !== -1) {
      this.edges.splice(index, 1);
    }
  }
}

// ============================
// SOAL 1

function shortestPath(
  friends: Record<string, string[]>,
  start: string,
  target: string,
) {
  const graph = new Graph();
  for (const key of Object.keys(friends)) {
    // console.log(`addNode(${key})`);

    graph.addNode(key);
  }

  for (const [key, val] of Object.entries(friends)) {
    for (const friend of val) {
      // console.log(`addGraph(${key}, ${friend})`);
      graph.addEdge(key, friend);
    }
  }

  if (!graph.nodes.get(start)) return false;
  if (!graph.nodes.get(target)) return false;

  const visited = new Set();
  const queue: [string, number][] = [];

  queue.push([start, 0]);
  visited.add(start);

  while (queue.length > 0) {
    const [curr, dist] = queue.shift()!;

    if (curr == target) {
      return dist;
    }

    // console.log(`${curr} visited`);

    visited.add(curr);

    for (const edge of graph.nodes.get(curr)!.edges) {
      if (!visited.has(edge.value)) {
        // [2], [1, 3, 4, 5]
        queue.push([edge.value, dist + 1]);

        visited.add(edge.value);
      }
    }
  }

  return -1;
}

console.log("=============SOAL 1=============");

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
    "David",
  ),
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
    "Eve",
  ),
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
    "Alice",
  ),
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
    "Charlie",
  ),
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
    "Bob",
  ),
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
    "Alice",
  ),
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
    "Eve",
  ),
); // Expected Output: 2

// ============================
// SOAL 2

class NewGraph {
  public islands: number;

  constructor() {
    this.islands = 0;
  }

  dfs(grid: number[][], i: number, j: number, visited: boolean[][]) {
    if (
      i >= grid.length ||
      i < 0 ||
      j >= grid[0].length ||
      j < 0 ||
      visited[i][j] ||
      grid[i][j] == 0
    )
      return;

    visited[i][j] = true;

    this.dfs(grid, i, j - 1, visited);
    this.dfs(grid, i - 1, j, visited);
    this.dfs(grid, i, j + 1, visited);
    this.dfs(grid, i + 1, j, visited);
  }
}

function islandCount(matrix: number[][]) {
  const graph = new NewGraph();

  const visited: boolean[][] = Array.from({ length: matrix.length }, (_, v) => {
    return Array.from({ length: matrix[v].length }, () => false);
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1 && !visited[i][j]) {
        graph.islands++;
        graph.dfs(matrix, i, j, visited);
      }
    }
  }

  return graph.islands;
}

console.log("=============SOAL 2=============");

// Testcase 1
console.log(
  islandCount([
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]),
); // Expected Output: 1

// Testcase 2
console.log(
  islandCount([
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1],
  ]),
); // Expected Output: 3

// Testcase 3
console.log(
  islandCount([
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [1, 0, 0, 1, 1],
  ]),
); // Expected Output: 5

// Testcase 4
console.log(
  islandCount([
    [1, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
  ]),
); // Expected Output: 4

// Testcase 5
console.log(
  islandCount([
    [1, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
  ]),
); // Expected Output: 6

// Testcase 6
console.log(
  islandCount([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0],
  ]),
); // Expected Output: 2

// Testcase 7
console.log(
  islandCount([
    [1, 1, 1],
    [0, 0, 0],
    [1, 0, 1],
  ]),
); // Expected Output: 3
