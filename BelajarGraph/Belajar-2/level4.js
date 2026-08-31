/*

🪜 Level 4 — Fungsi cek batas (boundary check)

Ini bagian yang sering jadi sumber bug kalau dilewatkan: sebelum kita cek grid[row][col], kita harus pastikan row dan col itu valid (gak keluar dari grid).

Bayangkan kita di sel [0, 0] (pojok kiri atas), terus kita cek "tetangga atas"-nya pakai rumus dari Level 2: [row - 1, col] = [-1, 0].

Pertanyaan:

1. Apa yang terjadi kalau kita coba akses grid[-1][0] di JavaScript? (Coba tebak dulu, atau boleh dicoba langsung di console: let a = [1,2,3]; console.log(a[-1]);)
2. Supaya sebuah posisi [row, col] dianggap valid (masih di dalam grid), ada berapa syarat yang harus dipenuhi? Coba sebutkan (dalam bentuk kalimat dulu, belum kode), misalnya:
    - row harus lebih besar atau sama dengan berapa?
    - row harus lebih kecil dari berapa? (Petunjuk: berapa jumlah baris di grid? Fungsi apa di JS buat menghitung panjang array?)
    - col harus lebih besar atau sama dengan berapa?
    - col harus lebih kecil dari berapa?
3. Setelah posisi valid dipastikan, ada 1 syarat lagi yang harus dicek sebelum kita anggap sel itu "boleh dikunjungi": nilai di grid[row][col] itu harus sama dengan apa? (Petunjuk: kita cuma mau menjelajah daratan, bukan air atau sel yang udah "ditenggelamkan")


Jawaban:
1. aku udah coba hasilnya malah undefined, kalo gak salah hal seperti itu bisa di bahasa pemrograman python tetapi gak bisa di javascript.
2. jujurly yang nomer 2 aku mamsih bingung.
3. owh, berarti harus samadengan 1 yang dianggap sebagai daratan.


--------------------


        kolom: 0  1  2
baris 0:       1  1  0
baris 1:       1  0  0
baris 2:       0  1  1



Pertanyaan ulang dengan angka konkret dulu (grid 3x3 di atas):

1. grid.length untuk grid contoh di atas hasilnya berapa?
2. grid[0].length untuk grid contoh di atas hasilnya berapa?
3. Sekarang coba isi (pakai simbol <, <=, >=, dsb, dan grid.length / grid[0].length):
    - Syarat row valid: row >= 0 dan row ??? grid.length (pakai < atau <=? coba pikir: kalau ada 3 baris, index tertingginya berapa?)
    - Syarat col valid: col >= 0 dan col ??? grid[0].length

Jawaban:
1. 3
2. 3
3.  - pakai < karena biar gak undefined (janlup array dimulai dari 0 yaa wkwkwk)
    - ini juga sama pake < 

------------
Sekarang kita punya semua bahan buat bikin fungsi isValid. Coba kamu rangkai sendiri:

js
function isValid(grid, row, col) {
  // gabungkan semua syarat yang udah kamu temukan:
  // 1. row >= 0
  // 2. row < grid.length
  // 3. col >= 0
  // 4. col < grid[0].length
  // 5. grid[row][col] === 1  (harus daratan)
  
  return ???;
}

Tugas: Coba tulis isi return ??? itu, gabungkan ke-5 syarat di atas jadi satu ekspresi boolean pakai && (AND — semua syarat harus benar).

Jawaban:
return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1;
*/

let a = [1,2,3];
console.log(a[-1]);