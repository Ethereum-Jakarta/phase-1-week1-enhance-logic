const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
};


function shortestPath(friends, start, target) {
  let queue = [{node: start, dist: 0}];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let current = queue.shift();

    // kalau current.node ini adalah target yang dicari, langsung return jaraknya!
    if (current.node === target) {
      return current.dist;
   
    }
    
    let neighbors = friends[current.node];

    for (let neighboor of neighbors) {
      if (!visited.has(neighboor)) {
        visited.add(neighboor);
        queue.push({ node: neighboor, dist: current.dist + 1});
      }
    }
  }
  return -1;
}

console.log(shortestPath(friends, 'Alice', 'David'));
console.log(shortestPath(friends, 'Alice', 'Asep'));
console.log(shortestPath(friends, 'Alice', 'Alice'));


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



/*
Pertanyaan buat kamu isi:

1. Isi semua bagian ??? di atas.
2. Nilai apa yang harus di-return di baris paling akhir (setelah while selesai tapi target gak pernah ditemukan)? Cek lagi deskripsi soal di awal — ada aturan khusus untuk kasus ini.

Jawaban:
1. Done kode ada diatas y
2. mereturn target tidak ditemukan
*/