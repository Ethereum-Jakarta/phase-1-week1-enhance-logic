function shortestPath(friends, start, target) {
  if (start === target) {
    return 0;
  }

  const queue = [{ node: start, distance: 0 }];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const { node, distance } = queue.shift();

    for (const friend of friends[node]) {
      if (!visited.has(friend)) {
        if (friend === target) {
          return distance + 1;
        }
        visited.add(friend);
        queue.push({ node: friend, distance: distance + 1 });
      }
    }
  }

  return -1; // No path found
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
