/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {

    // console.log(bubbleSort(strs));

    // console.log(selectionSort(strs));

    // console.log(insertionSort(strs));

    const kelas = new sortMerge();
    console.log(kelas.hasilMerge(strs));
};

const bubbleSort = (string) => {
    let result = [];
    let kelompok = {};

    for (let i = 0; i < string.length; i++) {
        let kata = string[i];
        let urut = kata.split('');

        for (let j = 0; j < urut.length - 1; j++) {
            if (urut[j] > urut[j + 1]) {
                let sv = urut[j];
                urut[j] = urut[j + 1];
                urut[j + 1] = sv;
                j = -1;
            }
        }

        let hasil = urut.join('');
        if (!kelompok[hasil]) {
            kelompok[hasil] = [kata];
        } else {
            kelompok[hasil].push(kata);
        }
    }

    for (const anggota in kelompok) {
        result.push(kelompok[anggota]);
    }

    return result;
}

const selectionSort = (string) => {
    let result = [];
    let kelompok = {};

    for (let i = 0; i < string.length; i++) {
        let kata = string[i];
        let array = kata.split('');

        for (let j = 0; j < array.length; j++) {
            let min = j;

            for (let k = j + 1; k < array.length; k++) {
                if (array[k] < array[min]) {
                    min = k;
                }
            }

            let sv = array[j];
            array[j] = array[min];
            array[min] = sv;
        }

        let urut = array.join('');
        if (!kelompok[urut]) {
            kelompok[urut] = [kata];
        } else {
            kelompok[urut].push(kata);
        }
    }

    for (const anggota in kelompok) {
        result.push(kelompok[anggota]);
    }
    return result;
}

const insertionSort = (string) => {
    let result = [];
    let kelompok = {};

    for (let i = 0; i < string.length; i++) {
        let kata = string[i];
        let array = kata.split('');

        for (let j = 1; j < array.length; j++) {
            let current = array[j];
            let k = j - 1;

            while (k >= 0 && array[k] > current) {
                array[k + 1] = array[k];
                k--;
            }

            array[k + 1] = current;
        }

        let urut = array.join('');
        if (!kelompok[urut]) {
            kelompok[urut] = [kata];
        } else {
            kelompok[urut].push(kata);
        }
    }

    for (const kata in kelompok) {
        result.push(kelompok[kata]);
    }

    return result;
}

class sortMerge {
    constructor() {
        this.result = [];
        this.kelompok = {};
    }

    hasilMerge(string) {
        for (let i = 0; i < string.length; i++) {
            let kata = string[i];
            let array = kata.split('');

            let urut = this.mergeSort(array);
            if (!this.kelompok[urut]) {
                this.kelompok[urut] = [kata];
            } else {
                this.kelompok[urut].push(kata);
            }
        }

        for (const anggota in this.kelompok) {
            this.result.push(this.kelompok[anggota]);
        }
        return this.result;
    }

    mergeSort(array) {
        if (array.length <= 1) {
            return array;
        }

        // bagi array menjadi dua bagian
        const tengah = Math.floor(array.length / 2);
        const kiri = array.slice(0, tengah);
        const kanan = array.slice(tengah);

        // rekursif (urutkan kedua bagian) hingga tersisa satu masing masing sisi
        const kubuKiri = this.mergeSort(kiri);
        const kubuKanan = this.mergeSort(kanan);

        // gabungkan dua bagian yang telah diurutkan
        return this.merge(kubuKiri, kubuKanan);
    }

    // fungsi untuk menggabungkan dua array terurut
    merge(kiri, kanan) {
        let hasil = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < kiri.length && rightIndex < kanan.length) {
            if (kiri[leftIndex] < kanan[rightIndex]) {
                hasil.push(kiri[leftIndex]);
                leftIndex++;
            } else {
                hasil.push(kanan[rightIndex]);
                rightIndex++;
            }
        }

        // sisa elemen pada kedua array
        return hasil.concat(kiri.slice(leftIndex)).concat(kanan.slice(rightIndex));
    }
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