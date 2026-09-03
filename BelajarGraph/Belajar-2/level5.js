/*

🪜 Level 5 — Fungsi DFS (menjelajah 1 pulau sampai habis)

Ini bagian intinya. DFS itu rekursif: dari 1 sel daratan, kita "tenggelamkan" sel itu, lalu panggil diri sendiri (DFS lagi) ke ke-4 tetangganya (atas, bawah, kiri, kanan). Setiap panggilan rekursif itu akan menjalankan proses yang sama lagi, terus menyebar sampai gak ada lagi daratan yang nyambung.

Ini beda dari BFS kemarin (yang pakai queue + while loop). DFS di soal ini kita akan pakai rekursi (fungsi manggil dirinya sendiri).

Pertanyaan pemahaman dulu, sebelum nulis kode:

1. Kalau fungsi dfs(grid, row, col) dipanggil di sel yang tidak valid (misal keluar grid, atau itu air 0, atau udah pernah dikunjungi/ditenggelamkan jadi 0), apa yang seharusnya terjadi? (Petunjuk: ini namanya base case / kondisi berhenti rekursi — kalau gak ada ini, rekursinya bisa jalan selamanya)
2. Kalau sel [row, col] itu valid (daratan, 1), langkah pertama apa yang harus kita lakukan? (Petunjuk: inget Level 3 — kita harus "menenggelamkan" sel ini dulu supaya gak dikunjungi lagi nanti)
3. Setelah sel itu ditenggelamkan, apa yang harus dilakukan selanjutnya? (Petunjuk: panggil dfs lagi, ke berapa arah?)


Jawaban:
1. Mungkin akan berhenti melakukan rekursi. mungkin nanti akan ada sebuah else if yang nanti akan membuat break rekursi / loopnya
2. yang harus dilakukan adalah mengganti angka 1 tersebut menjadi angka 0 atau bisa disebut juga menenggelamkan.
3. panggil dfs lagi ke semua arah yaitu atas, bawah, kiri, kanan.


--------------------------------
function dfs(grid, row, col) {
  // 1. Base case: kalau posisi ini TIDAK valid, langsung berhenti
  if (!isValid(grid, row, col)) {
    return; // gak ngembaliin nilai apa-apa, cuma keluar dari fungsi
  }

  // 2. Tenggelamkan sel ini (tandai sudah dikunjungi)
  grid[row][col] = ???;

  // 3. Panggil dfs lagi ke 4 arah tetangga
  dfs(grid, row ??? , col);      // atas
  dfs(grid, row ??? , col);      // bawah
  dfs(grid, row, col ??? );      // kiri
  dfs(grid, row, col ??? );      // kanan
}

Tugas kamu: Isi semua bagian ??? di atas. Kamu udah punya semua jawabannya dari Level 2 (rumus tetangga) dan Level 3 (cara menenggelamkan) — tinggal disusun ulang di sini.

Setelah itu, coba jawab pertanyaan konseptual ini juga (penting buat Level 6 nanti):

Pertanyaan: Kalau dfs(grid, 0, 0) dipanggil sekali di grid contoh Level 4 tadi (yang punya pulau di pojok kiri atas), apakah dia akan otomatis "menyebar" dan menenggelamkan seluruh pulau yang terhubung ke [0,0]? Kenapa itu bisa terjadi meskipun kita cuma manggil dfs satu kali dari luar?


Jawaban:

function dfs(grid, row, col) {
  // 1. Base case: kalau posisi ini TIDAK valid, langsung berhenti
  if (!isValid(grid, row, col)) {
    return; // gak ngembaliin nilai apa-apa, cuma keluar dari fungsi
  }

  // 2. Tenggelamkan sel ini (tandai sudah dikunjungi)
  grid[row][col] = 0;

  // 3. Panggil dfs lagi ke 4 arah tetangga
  dfs(grid, row - 1 , col);      // atas
  dfs(grid, row + 1 , col);      // bawah
  dfs(grid, row, col - 1 );      // kiri
  dfs(grid, row, col + 1 );      // kanan
}

1. iyaa, karena ini merupakan rekursi, jadi ketika kita memanggil dfs(grid, 0, 0), fungsi ini akan menenggelamkan sel [0,0] dan kemudian memanggil dirinya sendiri untuk keempat arah disebelahnya. dan jika  sudah 0 / keluar grid maka rekursi berhenti.
*/