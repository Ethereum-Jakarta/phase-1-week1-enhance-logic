/*
🪜 Level 3 — Konsep "menandai visited" di grid (flood fill)

Di BFS kemarin, kita pakai Set buat nyimpen nama-nama yang udah dikunjungi. Di grid, ada 2 pendekatan umum:
Opsi A: Bikin Set yang isinya "string koordinat" kayak "2,3" (gabungan row & col jadi 1 string), terus visited.has("2,3").
Opsi B: Langsung ubah nilai di grid aslinya — begitu sel [row, col] sudah dikunjungi, kita ubah nilainya dari 1 jadi 0 (anggap aja "udah ditenggelamkan", jadi gak akan dianggap daratan lagi kalau kepapasan lagi).

Pertanyaan buat kamu pikirkan:

1. Opsi B itu terkesan "curang" karena kita mengubah data asli (grid input) — tapi ini teknik umum yang disebut flood fill (mengecat/menenggelamkan area yang sudah dikunjungi). Menurutmu, apa keuntungan Opsi B dibanding Opsi A? (Petunjuk: kita gak perlu bikin struktur data tambahan sama sekali)
2. Menurutmu, apa kerugian/risiko dari Opsi B? (Petunjuk: bagaimana kalau nanti user butuh grid aslinya lagi setelah fungsi islandCount selesai jalan?)
3. Untuk latihan ini, saya sarankan kita pakai Opsi B (lebih simpel dan lazim dipakai untuk soal seperti ini). Coba pikirkan: kalau kita ketemu sel [row, col] yang nilainya 1, dan kita mau "menandainya sebagai sudah dikunjungi", baris kode apa yang kamu tulis? (dalam bentuk grid[row][col] = ???)

Jawaban:
1. Keuntungan Opsi B dibanding Opsi A adalah kita tidak perlu membuat struktur data tambahan (seperti Set) untuk menyimpan koordinat yang sudah dikunjungi. Dengan mengubah nilai di grid langsung, kita bisa menghemat memori dan membuat kode lebih sederhana. SIngkatnya lebih mudah dipahami dan tidak pusing
2. kalo menurutku sih kerugiannya adalah kehilangan data asli gris. jadi, yaa mennurutku solusinya adalah buat salinan awal grid sebelum diubah dan masukkan ke variabel.
3. grid[row, col] = 0;
*/