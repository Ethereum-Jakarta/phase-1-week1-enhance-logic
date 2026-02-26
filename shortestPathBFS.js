
function shortestPath(friends, start, target) {
  //code
  const visited = new Set();
  const queue = [];

  visited.add(start);
  queue.push([start, 0]);

  while(queue.length > 0) {
    const [currentPerson, index] = queue.shift();
    
    if(currentPerson == target) return index;

    for(const friend of friends[currentPerson]) {
      if(!visited.has(friend)) {
        visited.add(friend);
        queue.push([friend, index + 1]);
      }
    }

  }
  
  return -1;
}

const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
}

// Testcase 1
  console.log(shortestPath(friends, 'Alice', 'David')); // Expected Output: 2
  
  // Testcase 2
  console.log(shortestPath(friends, 'Alice', 'Eve')); // Expected Output: 2
  
  // Testcase 3
  console.log(shortestPath(friends, 'Alice', 'Alice')); // Expected Output: 0
  
  // Testcase 4
  console.log(shortestPath(friends, 'David', 'Charlie')); // Expected Output: 3
  
  // Testcase 5
  console.log(shortestPath(friends, 'Eve', 'Bob')); // Expected Output: 1
  
  // Testcase 6
  console.log(shortestPath(friends, 'Charlie', 'Alice')); // Expected Output: 1
  
  // Testcase 7
  console.log(shortestPath(friends, 'David', 'Eve')); // Expected Output: 2