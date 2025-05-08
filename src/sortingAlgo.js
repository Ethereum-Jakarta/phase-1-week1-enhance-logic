import {getRandomInt} from "./utils";

export default function (arr) {

    const enumSort = [bubbleSort, selectionSort, insertionSort, mergeSort]
    const randomSortingMethod = enumSort[getRandomInt(0, enumSort.length - 1)];
    const results = {};

    //pritnGot
    console.log(randomSortingMethod.name)

    //perWordProcess
    for (const word of arr) {

        //Split->sort->join
        const char = word.split("")
        randomSortingMethod(char)
        const sortingWord = char.join("")

        //jika word yang di sorting ada di result -> masukan raw nya else value sortnya
        if (results[sortingWord]) {
            results[sortingWord].push(word);
        } else {
            results[sortingWord] = [word];
        }
    }


    console.log(Object.values(results))

};

// Algoritma Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;

    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {

        // Loop dalam untuk perbandingan
        for (let j = 0; j < n - i - 1; j++) {
            // Membandingkan elemen berdekatan
            if (arr[j] > arr[j + 1]) {
                // Tukar arr[j] dan arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Algoritma Selection Sort
function selectionSort(arr) {
    let n = arr.length;

    // Loop luar untuk melakukan iterasi
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Cari elemen terkecil pada bagian yang belum diurutkan
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Tukar arr[i] dan arr[minIndex]
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

// Algoritma Insertion Sort
function insertionSort(arr) {
    let n = arr.length;

    // Dimulai dari elemen kedua (indeks 1)
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;

        // Geser elemen-elemen yang lebih besar ke posisi berikutnya
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Tempatkan elemen current pada posisi yang tepat
        arr[j + 1] = current;
    }
}

// Algoritma Merge Sort
function mergeSort(arr) {

    function merge(left, right) {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        // Sisa elemen pada kedua array
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }

    if (arr.length <= 1) {
        return arr;
    }

    // Bagi array menjadi dua bagian
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Rekursif: Urutkan kedua bagian
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Gabungkan dua bagian yang telah diurutkan
    return merge(sortedLeft, sortedRight);
}

// Fungsi untuk menggabungkan dua array terurut menjadi satu array terurut
