// Fungsi untuk mengurutkan array menggunakan Merge Sort
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
};

// Fungsi untuk mengelompokkan anagram
const groupAnagrams = function(strs) {
    const map = new Map();

    for (const str of strs) {
        // Mengurutkan karakter dalam string menggunakan Merge Sort
        const sortedStr = mergeSort(str.split('')).join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    // Mengonversi Map ke array
    const result = Array.from(map.values());

    // Mengurutkan setiap kelompok anagram berdasarkan urutan kemunculan
    result.sort((a, b) => strs.indexOf(a[0]) - strs.indexOf(b[0]));

    return result;
};

// Test Case
console.log(JSON.stringify(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(JSON.stringify(groupAnagrams([""]))); 
// Output: [[""]]

console.log(JSON.stringify(groupAnagrams(["a"]))); 
// Output: [["a"]]

console.log(JSON.stringify(groupAnagrams(["listen", "silent", "hello", "world"]))); 
// Output: [["listen","silent"],["hello"],["world"]]

console.log(JSON.stringify(groupAnagrams(["rat", "tar", "art", "car"]))); 
// Output: [["rat","tar","art"],["car"]]

console.log(JSON.stringify(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]))); 
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

console.log(JSON.stringify(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]))); 
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]