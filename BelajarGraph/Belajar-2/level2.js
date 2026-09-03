/*
🪜 Level 2 — Koordinat & "tetangga" di grid

Di soal BFS kemarin, "tetangga" dari Alice itu jelas: friends['Alice']. Di grid, kita gak punya daftar tetangga yang eksplisit — kita harus hitung sendiri dari posisi [row, col].

Pertanyaan:
Kalau kita berdiri di sel [row, col], ada 4 kemungkinan arah tetangga (atas, bawah, kiri, kanan) — tanpa diagonal (sesuai definisi soal: "berdekatan secara horizontal atau vertikal").
Coba isi titik-titik ini, dalam bentuk [row, col] juga:

1. Tetangga di atas dari [row, col] adalah [???, ???]
2. Tetangga di bawah dari [row, col] adalah [???, ???]
3. Tetangga di kiri dari [row, col] adalah [???, ???]
4. Tetangga di kanan dari [row, col] adalah [???, ???]

(Petunjuk: pikirkan, kalau mau "naik" satu baris ke atas, nomor baris itu nambah atau berkurang?)

Jawaban:
1. Tetangga di atas dari [row, col] adalah [row - 1, col]
2. Tetangga di bawah dari [row, col] adalah [row + 1, col ]
3. Tetangga di kiri dari [row, col] adalah [row, col - 1]
4. Tetangga di kanan dari [row, col] adalah [row, col + 1]

*/