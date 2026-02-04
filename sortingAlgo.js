/*Diberikan sebuah array dari string strs, kelompokkan anagram - anagram secara bersama - sama.Anda bisa mengembalikan jawaban dalam urutan apa pun.

Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf - huruf dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

Contoh 1:
Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

Contoh 2:
Input: strs = [""]

Output: [[""]]

Contoh 3:
Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] terdiri dari huruf - huruf kecil dalam bahasa Inggris.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    // Implementasi akan datang di sini
    let groups = {}
    strs.map(item => {
        const splitItem = item.split('')
        const sortedItem = mergeSort(splitItem)

        if (groups[sortedItem]) {
            groups[sortedItem].push(item)
        } else {
            groups[sortedItem] = [item]
        }

    })

    return Object.values(groups)
};

const bubbleSort = arr => {
    for (const i in arr) {
        for (const j in arr) {
            if (arr[i] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
}

const selectionSort = arr => {
    for (const i in arr) {
        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }

        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}

const insertionSort = arr => {
    for (const i in arr) {
        let curr = arr[i]
        let j = i - 1

        while (j >= 0 && arr[i] > curr) {
            arr[j + 1] = arr[j]
            j--
        }

        arr[j + 1] = curr
    }
}

const mergeSort = arr => {
    if (arr.length <= 1) {
        return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    return merge(sortedLeft, sortedRight);
}
const merge = (left, right) => {
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


// kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams(). 
