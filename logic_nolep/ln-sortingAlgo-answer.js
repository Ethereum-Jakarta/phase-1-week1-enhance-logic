const groupAnagrams = function (strs) {
    let anagram = {};
    for (let i = 0; i < strs.length; i++) {

        // let sortedArr = bubbleShort(strs[i]);
        // let sortedArr = selectionSort(strs[i])
        let sortedArr = insertionSort(strs[i])
        // console.log(sortedArr)
        // console.log("       sort:", sortedArr);

        if (anagram[sortedArr]) {
            anagram[sortedArr].push(strs[i]);
        } else {
            anagram[sortedArr] = [strs[i]]
        }
    }

    // console.log(anagram) //{ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] }
    return Object.values(anagram); //[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
};

function bubbleShort(str) {
    let chars = str.split("");

    for (let i = 0; i < chars.length - 1; i++) {
        for (let j = 0; j < chars.length - i - 1; j++) {
            if (chars[j] > chars[j + 1]) {
                let temp = chars[j];
                chars[j] = chars[j + 1];
                chars[j + 1] = temp;
            }
        }
    }

    return chars.join("")
}

function selectionSort(str) {
    /*
    mengurutkan huruf dalam string dari yang terkecil ke terbesar(berdasarkan urutan alfabet)

    contoh: "cahaya" ->["a","a","a","c","h","y"] -> "aaachy"
    */
    let chars = str.split(""); //ubah string menjadi array karakter, agar bisa dibanding dan ditukar
    // Misalnya "cahaya" → ['c', 'a', 'h', 'a', 'y', 'a']

    // loop luar untuk melakukan iterasi
    for (let i = 0; i < chars.length - 1; i++) {
        let minIndex = i;

        /*
        loop luar: posisi saar ini (i) adalah posisi yang akan diisi karakter terkecil dari sisa array

        minIndex menyimpan index dari karakter terkecil yang ditemukan dari i ke akhir
        */

        for (let j = i + 1; j < chars.length; j++) {
            if (chars[j] < chars[minIndex]) {
                minIndex = j;
            }

            /*
            loop dalam: mencari karakter terkecil di sisa array mulai dari index i + 1 hingga akhir

            jika ditemukan karakter yang lebih kecil dari chars[minIndex], update minIndex
            */
        }

        //tukar arr[i] dan arr[minIndex]
        let temp = chars[i];
        chars[i] = chars[minIndex];
        chars[minIndex] = temp;
    }

    return chars.join("")
}

function insertionSort(str) {
    let chars = str.split("")

    // dimulai dari elemen kedua (indeks 1)
    for (let i = 1; i < chars.length; i++) {
        let current = chars[i];
        let j = i - 1;

        /*
        loop dimulai dari index ke-1(bukan 0), karena kita anggap elemen pertama sudah terurut

        setiap iterasi akan menyisipkan chars[i] ke posisi yang benar di antara elemen-elemen sebelumnya (yang sudah terurut)

        current adalah karakter yang ingin disisipkan ke posisi yang benar

        j adalah pointer untuk memeriksa elemen-elemen sebelumnya
        */

        //geser elemen-elemen yang lebih besar ke posisi berikutnya
        while (j >= 0 && chars[j] > current) {
            chars[j + 1] = chars[j];
            j--

            /*
            selama karakter sebelumnya (chars[j]) lebih besar dari current, geser karakter itu ke kanan (ke chars[j+1])

            ulangi sampai menemukan posisi yang tepat untuk current
            */
        }

        //tempatkan elemen current pada posisi yang tepat;
        chars[j + 1] = current;
        // Setelah semua elemen yang lebih besar digeser, tempatkan current di posisi kosong yang tersisa (j + 1).

    }

    return chars.join("")

    /*
    Input: "cahaya" → ['c', 'a', 'h', 'a', 'y', 'a']
    i = 1 (current = 'a')
    'a' < 'c' → geser 'c' → [c, c, h, a, y, a]
    tempatkan 'a' → [a, c, h, a, y, a]

    i = 2 (current = 'h')
    'h' > 'c' → tidak geser → [a, c, h, a, y, a]

    i = 3 (current = 'a')
    'a' < 'h' → geser 'h'
    'a' < 'c' → geser 'c'
    'a' > 'a' → stop → tempatkan 'a' → [a, a, c, h, y, a]

    Lanjut hingga akhir...
    */
}

function mergeSort(str) {
    let chars = str.split("");

    if (chars.length <= 1) {
        return chars.join("");
    }

    //bagi array menjadi dua bagian
    const middle = Math.floor(Array.length / 2);
    const left = chars.slice(0, middle);
    const right = chars.slice(middle);

    //rekursif: urutkan kedua bagian
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    //gabungkan dua bagian yang telah diurutkan
    return mergeSort(sortedLeft, sortedRight).join("")
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"]));
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]