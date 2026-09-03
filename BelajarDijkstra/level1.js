/*
🎮 LEVEL 1 — Rookie Explorer

Misi: Buktikan kamu paham cara kerja Dijkstra sebelum nulis kode, pakai graf mini ini:

graph = {
  A: { B: 4, C: 1 },
  B: { A: 4, C: 2, D: 5 },
  C: { A: 1, B: 2, D: 8 },
  D: { B: 5, C: 8 }
}

Tugas (kerjakan di kepala/kertas, lalu ketik hasilnya ke saya):

1. Mulai dari node A. Berapa jarak awal ke B, C, D? (isi tabel)
2. Node mana yang pertama kali "dikunjungi" setelah A? Kenapa?
3. Setelah node itu dikunjungi, jarak ke node mana saja yang ter-update? Berapa nilainya?
4. Lanjutkan sampai semua node dikunjungi — tulis urutan kunjungannya dan jarak akhir dari A ke B, C, D.


Jawaban:
1. berarti untuk jarak A ke D adalah infinity karena D bukan tetangga langsung dari A. tetapi jarak A ke B dan C masih untuk yakni A -> b = 4 dan A -> = 1
2. menurutku sih sih C karena jarak A ke C adalah 1 dan lebih pendek daripada A ke B yakni 4
3. untuk A ke D flownya adalah cek dulu tetangga langsung A yakni [B = 4, C = 1] lalu pilih yang paling dekat yakni C, lalu C bertetangga langsung dengan D dengan jarak 8.  
4. Dibawah

---------------------------
Pertanyaan buat kamu:

1. Dari sisa {B, D} dengan jarak sekarang B=3, D=9, mana yang dipilih berikutnya?
2. Setelah node itu dikunjungi, cek tetangganya — apakah ada jarak yang bisa di-update lebih pendek lagi (termasuk ke D)?
3. Tulis urutan kunjungan lengkap (A → ? → ? → ?) dan jarak akhir A ke B, C, D.

Jawaban:
1. B karena lebih jaraknya lebih pendek / lebih kecil nilainya
2. iyaa ada, tetapi bukan lebih pendek dan hanya sama panjang. semisal A -> C = 1 + C -> D = 8 = 9 sama seperti A -> B = 4 + B -> D = 5 = 9. jadi jarak ke D tetap 9. oh yaa ada combo lain juga yang secara urutan lebih panjang yakni  A -> C -> B -> D yakni 8
3. A -> C -> B -> D
*/