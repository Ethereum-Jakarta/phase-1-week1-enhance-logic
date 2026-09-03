/*
🪜 Level 6 — Loop utama: hitung berapa kali kita mulai DFS baru

Sekarang bagian terakhir: fungsi islandCount(grid) itu sendiri. Idenya:

Jelajahi setiap sel di grid satu-satu. Setiap kali ketemu sel yang masih 1 (belum ditenggelamkan), itu tandanya kita nemu pulau baru — panggil dfs di situ (biar seluruh pulau itu ditenggelamkan), dan tambah hitungan pulau.

Pertanyaan pemahaman dulu:

1. Untuk "menjelajahi setiap sel" di grid 2D, kita butuh 2 loop bersarang (nested loop) — satu buat row, satu buat col. Kira-kira bentuknya:
js
   for (let row = 0; row < ???; row++) {
     for (let col = 0; col < ???; col++) {
       // cek sel ini
     }
   }

Isi bagian ??? di kedua loop itu (petunjuk: sama seperti syarat valid di Level 4).

2. Di dalam loop tadi, kondisi apa yang menandakan kita baru menemukan pulau? (Petunjuk: nilai apa yang harus dicek di grid[row][col]?)
3. Kalau kondisi itu terpenuhi, ada 2 hal yang harus dilakukan: panggil dfs(...) (untuk menenggelamkan seluruh pulau itu) dan... apa lagi? (Petunjuk: kita lagi menghitung jumlah pulau, jadi butuh sebuah variabel counter)



Jawaban:
1. 
   for (let row = 0; row < grid.length; row++) {
     for (let col = 0; col < grid[row].length; col++) {
       // cek sel ini
     }
   }
2. grid[row][col] === 1
3. berarti awalnya membuat variabel untuk menghitung jumlah pulau, lalu pas grid[row][col] === 1 ternyata true maka variabel jumlah pulau ++ atau +=1 dan janganlua memanggil dfs nya
*/


function isValid(grid, row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length && grid[row][col] === 1;
}

function dfs(grid, row, col) {
    if (!isValid(grid, row, col)) {
        return;
    }

    grid[row][col] = 0;
    dfs(grid, row - 1, col);
    dfs(grid, row + 1, col);
    dfs(grid, row, col - 1);
    dfs(grid, row, col + 1);
}

function islandCount(grid) {
    let jumlahPulau = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let q = 0; q < grid[0].length; q++) {
            if (grid[i][q] === 1) {
                dfs(grid, i, q);
                jumlahPulau++;
            }
        }
    }
    return jumlahPulau;
}

function tes() {
  return;
}
console.log(tes());       // apa yang muncul?
console.log(tes() === 1); // true atau false?