/*
Pertanyaan:
1. Kenapa kita butuh visited? Apa yang terjadi kalau kita tidak pakai visited sama sekali di graph friends ini? (Coba bayangkan traversal-nya jalan terus tanpa henti atau tidak)
2. Struktur data apa yang cocok buat visited di JS supaya proses "cek apakah X sudah dikunjungi" itu cepat? (Ada beberapa opsi: Array, Object {}, atau Set). Menurutmu yang mana paling pas dan kenapa?
3. Coba tulis (boleh pseudocode/kata-kata dulu, belum perlu JS beneran) langkah awal untuk inisialisasi BFS dari start:
    a. Apa isi awal queue-nya?
    b. Apa isi awal visited-nya?

Jawaban:
1. Akan Looping secara terus menerut dikarenakan tidak ditandai sebagai visited atau sudah dikuunjungi.
2. hmmm, aku belum tau sih. 
3. a. saya masih belum paham, b. saya masih paham
*/

/*
Part2

Soal #2 — Struktur data untuk visited
Coba bandingkan 3 opsi ini untuk cek "apakah 'Bob' sudah ada di dalam koleksi ini?":

*/

// Opsi A: Array
let visitedArray = ['Alice', 'Charlie'];
visitedArray.includes('Bob'); // harus cek satu-satu dari awal sampai ketemu/habis

// Opsi B: Object
let visitedObj = { Alice: true, Charlie: true };
visitedObj['Bob']; // langsung "lompat" ke slot Bob, super cepat

// Opsi C: Set
let visitedSet = new Set(['Alice', 'Charlie']);
visitedSet.has('Bob'); // juga langsung cepat, mirip Object

/*
Pertanyaan buat kamu pikirkan: Antara Object dan Set, dua-duanya sama-sama cepat (karena pakai hashing di belakang layar). Bedanya lebih ke "gaya penulisan" — Set punya method .has(), .add() yang namanya lebih jelas maksudnya ("cek apakah ada" / "tambahkan") dibanding Object yang dipakai "seolah-olah" jadi lookup table.
Menurutmu, dari 3 opsi di atas, mana yang paling lambat kalau datanya makin banyak (misal 1000 orang)? Kenapa?

Soal #3 — Inisialisasi

Ini konsepnya gini: sebelum loop BFS mulai, kita perlu titik berangkat.

Queue itu isinya "daftar orang yang antre untuk diperiksa". Di awal, siapa satu-satunya orang yang perlu kita periksa? → Tulis jawabanmu dalam bentuk array, misal: queue = [???]
Visited itu isinya "orang yang sudah pernah kita masukkan ke antrian" (supaya nggak dimasukkan dua kali). Kalau kita sudah punya 1 orang di queue di atas, apakah orang itu juga perlu langsung ditandai di visited? Menurutmu iya atau tidak, dan kenapa?


Jawaban:
2. Mungkin Opsi A (Array) karena kamu sudah kasih command (//) harus cek satu-persatu dari awal sampai akhir
3. okey berarti semisal ada ada sepuluh anggota yaitu [adit, hanif, dedy, bobby] maka yang diperiksa dulu yaitu adit.dan queue nya adalah [hanif, dedy, bobby] dan visited nya adalah [adit]. dan jika sudah punya 1 orang di queue maka menurutku akan ditandai sebagai visited karena agar tidak terjadi invinite loop 

*/

/*
Pertanyaan ulang, lebih spesifik:

a. Pada detik ke-0 (sebelum apapun terjadi), siapa satu-satunya nama yang ada di queue? (Petunjuk: bukan semua teman-temannya, tapi orang yang kita mulai)
queue = [ ??? ]
b. Pada detik ke-0 itu juga, siapa satu-satunya nama yang ada di visited?
visited = new Set([ ??? ])

Jawaban:
a. mungkin yang mengantri pertama adalah start yang akan menjadi titik awal mulai
b. nama yang ada dititik visited adalah orang pertama yang diperiksa atau yang sebagai start
*/