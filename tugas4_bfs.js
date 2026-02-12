const shortestPath = (friends, start, target) => {
  class Node {
    constructor(value) {
      this.value = value;
      this.edges = [];
    }

    addEdge(node) {
      this.edges.push(node);
    }
  }

  class Graph {
    constructor() {
      this.nodes = new Map();
    }

    addNode(value) {
      this.nodes.set(value, new Node(value));
    }

    addEdge(source, destination) {
      if (!this.nodes.has(source) || !this.nodes.has(destination)) {
        throw new Error('Source or destination does not exist.');
      }
      const sourceNode = this.nodes.get(source);
      const destinationNode = this.nodes.get(destination);
      sourceNode.addEdge(destinationNode);
      destinationNode.addEdge(sourceNode)
    }

    BFS(startValue, targetValue) {
      const visited = new Set();
      const queue = [];
      const startNode = this.nodes.get(startValue);
      queue.push({ node: startNode, counter: 0 });

      while (queue.length > 0) {
        const { node, counter } = queue.shift();
        if (node.value === targetValue) return counter;

        visited.add(node);
        for (const edge of node.edges) {
          const neighbor = edge.value
          if (!visited.has(neighbor)) {
            queue.push({ node: edge, counter: counter + 1 });
            visited.add(neighbor);
          }
        }
      }
      return false;
    }
  }

  const myGraph = new Graph();
  const person1 = Object.keys(friends)[0];
  const person2 = Object.keys(friends)[1];
  const person3 = Object.keys(friends)[2];
  const person4 = Object.keys(friends)[3];
  const person5 = Object.keys(friends)[4];

  myGraph.addNode(person1);
  myGraph.addNode(person2);
  myGraph.addNode(person3);
  myGraph.addNode(person4);
  myGraph.addNode(person5);

  myGraph.addEdge(person1, person2);
  myGraph.addEdge(person1, person3);
  myGraph.addEdge(person2, person4);
  myGraph.addEdge(person2, person5);
  myGraph.addEdge(person3, person5);

  const bfsResult = myGraph.BFS(start, target);

  return bfsResult;
};


// Testcase 1
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'Alice',
    'David'
  )
); // Expected Output: 2

// Testcase 2
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'Alice',
    'Eve'
  )
); // Expected Output: 2

// Testcase 3
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'Alice',
    'Alice'
  )
); // Expected Output: 0

// Testcase 4
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'David',
    'Charlie'
  )
); // Expected Output: 3

// Testcase 5
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'Eve',
    'Bob'
  )
); // Expected Output: 1

// Testcase 6
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'Charlie',
    'Alice'
  )
); // Expected Output: 1

// Testcase 7
console.log(
  shortestPath(
    {
      Alice: ['Bob', 'Charlie'],
      Bob: ['Alice', 'David', 'Eve'],
      Charlie: ['Alice', 'Eve'],
      David: ['Bob'],
      Eve: ['Bob', 'Charlie'],
    },
    'David',
    'Eve'
  )
); // Expected Output: 2
