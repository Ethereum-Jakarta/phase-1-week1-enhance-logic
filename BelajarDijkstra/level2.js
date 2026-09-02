/*
🎮 LEVEL 2 — Queue Builder

Misi: Priority Queue adalah "mesin" yang bikin Dijkstra selalu ambil node terdekat duluan (yang barusan kamu lakukan manual di Level 1 — sekarang waktunya bikin komputer yang ngelakuin itu otomatis).

Starter code — isi bagian // TODO:

Petunjuk kecil (bukan jawaban):

- enqueue: kamu butuh gabungan .push() + .sort().
- dequeue: array yang sudah terurut, elemen "paling prioritas" ada di indeks mana? Fungsi array apa yang mengeluarkan sekaligus menghapus elemen di indeks itu?
- isEmpty: cek .length array-nya.

*/

class PriorityQueue {
  constructor() {
    this.elements = [];
  }

  enqueue(element, priority) {
    // TODO: masukkan { element, priority } ke this.elements
    // lalu urutkan array supaya priority terkecil ada di depan
    this.elements.push({ element, priority});
    this.elements.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    // TODO: keluarkan & kembalikan element dengan priority terkecil
    // (yaitu elemen paling depan array, karena udah diurutkan)
    return this.elements.shift().element;
  }

  isEmpty() {
    // TODO: return true kalau queue kosong
    return this.elements.length === 0;
  }
}

// --- TEST ---
const pq = new PriorityQueue();
pq.enqueue('A', 5);
pq.enqueue('B', 2);
pq.enqueue('C', 8);
pq.enqueue('D', 1);

console.log(pq.dequeue()); // harus: D (priority 1)
console.log(pq.dequeue()); // harus: B (priority 2)
console.log(pq.isEmpty()); // harus: false
console.log(pq.dequeue()); // harus: A (priority 5)
console.log(pq.dequeue()); // harus: C (priority 8)
console.log(pq.isEmpty()); // harus: true