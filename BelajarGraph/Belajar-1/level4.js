/*
Pertanyaan buat kamu pikirkan dulu (belum nulis kode):

1. Supaya tiap orang di queue "ingat" jaraknya masing-masing, menurutmu queue itu isinya harus berubah dari cuma nama orang ('Bob') jadi menyimpan apa aja? (Petunjuk: kita butuh 2 informasi sekaligus per item: siapa orangnya, dan berapa jaraknya)
2. Salah satu cara umum di JS: bikin queue isinya array kecil [nama, jarak], atau object {node: nama, dist: jarak}. Menurutmu render lebih gampang yang mana buat kamu pahami? (Nggak ada yang salah, ini soal preferensi)
3. Kalau kita pakai pendekatan [nama, jarak], gimana bentuk inisialisasi queue di awal (waktu cuma ada start dengan jarak 0)?
    a. queue = [ ??? ]

Jawaban:
1. Berarti pake object yaa dengan key adalah nama lalu valuenya berisi array [nama, jarak]
2. menuruku pake object lebih mudah dipahami sih dan tinggal index pake key nya ajaa
3. queue = start. 
    */