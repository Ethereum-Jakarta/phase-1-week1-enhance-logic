function shortestPath(friends, start, target) {
  const graph = friends;

  const visited = new Set();
  const queue = [[start]];

  while(queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    // console.log(path, current)

    if (current === target) return path.length - 1;

    if (!visited.has(current)) {
      visited.add(current);
      for (let friend of graph[current]){
        // console.log(friend)
        queue.push([...path, friend])
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