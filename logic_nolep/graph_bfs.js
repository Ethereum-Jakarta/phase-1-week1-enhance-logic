function shortestPath(friends, start, target) {
    //code
    if (start === target ) return 0;

    let queue = [[start, 0]]
    let visited = new Set()
    visited.add(start)

    while(queue.length > 0){
      let [current, distance] = queue.shift()

      for (let neighbor of friends[current] || []){
        if (neighbor === target){
          return distance + 1;
        }
        if (!visited.has(neighbor)){
          queue.push([neighbor, distance + 1])
          visited.add(neighbor)
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