function shortestPath(friends, start, target) {
  //code
  let visited = new Set(); // Untuk menampung node yang sudah dikunjungi
  let queue = []; // Menampung node dan menghapus node
  let distance = {}; // Menentukan jarak

  distance[start] = 0 // Inisialisasi distance dengan key = start dan value adalah -1
  queue.push(start) // Tambahkan start ke queue
  visited.add(start) // Tampung node 

  // Looping sampai panjang array queue == 0
  while ( queue.length > 0 ) {
    // Buat var currNode dan isi dengan elemen pertama dari queue
    let currNode = queue.shift()

    // cek: Jika currNode == Target output = distance currNode
    if ( currNode == target ) return distance[currNode];
    
    // Looping selama panjang dari array friends[currNode]
    for (let i = 0; i < friends[currNode].length; i++) {
      let neighbor = friends[currNode][i]; // Buat var neighbor untuk menampung elemen dari setiap looping

      // cek: Jika belum pernah dikunjungi
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // tambahkan neighbor ke visited
        queue.push(neighbor); // tambahkan neighbor ke queue
        distance[neighbor] = distance[currNode] + 1; // Perbarui distance
      }
    }
  }


  // Jika tidak ada node output = -1
  return -1
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
