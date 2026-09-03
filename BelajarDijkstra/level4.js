/*

🎮 LEVEL 4 — Trail Blazer

Misi: previous yang kamu hasilkan tadi ({ A: null, C: 'A', B: 'C', D: 'B' }) itu kayak breadcrumb — nunjukkin "buat sampe ke sini, saya datang dari mana". Sekarang kamu bikin fungsi yang jalan mundur dari breadcrumb itu buat nyusun jalur lengkap.

Petunjuk kecil:
- "Masukkan ke depan array" — inget method array yang kebalikan dari .push(). Di materi yang kamu upload juga ada dipakai, cek bagian getPath.
- Loop-nya: while (current !== null) { ... }
- Jangan lupa update current di akhir tiap iterasi, kalau enggak bakal infinite loop!
*/


function getPath(previous, end) {
  const path = [];
  let current = end;

  // TODO: 
  // - selama current bukan null:
  //   - masukkan current ke DEPAN array path (bukan belakang!)
  //   - pindah current ke previous[current]

  while (current !== null) {
    path.unshift(current);
    current = previous[current];
  }
  return path;
}

// --- TEST (pakai previous dari Level 3) ---
const previous = { A: null, C: 'A', B: 'C', D: 'B' };

console.log(getPath(previous, 'D')); // harus: ['A', 'C', 'B', 'D']
console.log(getPath(previous, 'B')); // harus: ['A', 'C', 'B']
console.log(getPath(previous, 'A')); // harus: ['A']