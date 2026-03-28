function shortestPath(friends, start, target) {
    if (start === target) return 0; 
    const queue = [[start, 0]];
    const visited = new Set(); 

    while (queue.length > 0) {
        const [current, length] = queue.shift(); 
        if (visited.has(current)) continue; 
        visited.add(current); 
        for (const friend of friends[current]) {
            if (friend === target) {
                return length + 1; 
            }
            queue.push([friend, length + 1]);
        }
    }

    return -1; 
}

// Testcase
console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'Alice', 'David')); // Expected Output: 2

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'Alice', 'Eve')); // Expected Output: 2

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'Alice', 'Alice')); // Expected Output: 0

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'David', 'Charlie')); // Expected Output: 3

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'Eve', 'Bob')); // Expected Output: 1

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'Charlie', 'Alice')); // Expected Output: 1

console.log(shortestPath({
    'Alice': ['Bob', 'Charlie'],
    'Bob': ['Alice', 'David', 'Eve'],
    'Charlie': ['Alice', 'Eve'],
    'David': ['Bob'],
    'Eve': ['Bob', 'Charlie']
}, 'David', 'Eve')); // Expected Output: 2

console.log("");
console.log("Test Case 2:");
class Graph {
    constructor(grid) {
        this.grid = grid;
        this.visited = new Set();
    }

    dfs(row, col) {
        if (row < 0 || row >= this.grid.length || col < 0 || col >= this.grid[0].length || this.grid[row][col] === 0 || this.visited.has(`${row},${col}`)) {
            return;
        }

        this.visited.add(`${row},${col}`);

        
        this.dfs(row - 1, col); 
        this.dfs(row + 1, col); 
        this.dfs(row, col - 1); 
        this.dfs(row, col + 1); 
    }
}

function islandCount(grid) {
    const graph = new Graph(grid);
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === 1 && !graph.visited.has(`${row},${col}`)) {
                graph.dfs(row, col); 
                count++; 
            }
        }
    }

    return count; 
}

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