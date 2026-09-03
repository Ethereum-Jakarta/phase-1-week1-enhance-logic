const friends = {
  'Alice': ['Bob', 'Charlie'],
  'Bob': ['Alice', 'David', 'Eve'],
  'Charlie': ['Alice', 'Eve'],
  'David': ['Bob'],
  'Eve': ['Bob', 'Charlie']
};

function shortestPath(friends, start, target) {
  let queue = [start];
  let visited = new Set([start]);

  while (queue.length > 0) {
    let current = queue.shift();  // ambil dari mana? depan atau belakang antrian?

    console.log("Memeriksa:", current); // buat debugging dulu

    let neighbors = friends[current]; // teman-teman dari 'current' itu apa?

    for (let neighbor of neighbors) {
      if (!visited.has(neighbor)) {   // cek: apakah neighbor ini BELUM dikunjungi?
        visited.add(neighbor);        // tandai sudah dikunjungi
        queue.push(neighbor);          // masukkan ke antrian
      }
    }
  }
}

shortestPath(friends, 'Alice', 'David')

/*
Pertanyaan:

1. Urutan apa yang muncul di console? Tulis di sini.
2. Apakah urutannya Alice → Bob, Charlie (gelombang 1) → David, Eve (gelombang 2)? Cocok nggak dengan jawaban "gelombang" kamu di Level 1?

Jawaban:
1. Memeriksa: Alice
Memeriksa: Bob
Memeriksa: Charlie
Memeriksa: David
Memeriksa: Eve
2. Iyaa cocok. berarti awalnya mengecek alice dan alice punya temen Bob dan Charlie lalu Bob juga punya temen selain alice yakni David dan Eve 
*/