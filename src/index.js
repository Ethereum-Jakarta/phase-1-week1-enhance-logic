export default function () {

    return "index.js"

};

// Algoritma Merge Sort
function mergeSort(arr) {
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

let array = [12, 11, 13, 5, 6, 7];
let sortedArray = mergeSort(array);
console.log("Array terurut:", sortedArray);