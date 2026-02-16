// # LOGIC NOLEP (sortingAlgo.js)
// Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. Anda bisa mengembalikan jawaban dalam urutan apa pun.

// Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

// Contoh 1:
// ```
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// ```

// Contoh 2:
// ```
// Input: strs = [""]

// Output: [[""]]
// ```

// Contoh 3:
// ```
// Input: strs = ["a"]

// Output: [["a"]]
// ```

// Constraints:

// - 1 <= strs.length <= 104
// - 0 <= strs[i].length <= 100
// - strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.

// ```js
// /**
// * @param {string[]} strs
// * @return {string[][]}
// */

// <--Bubble Sort-->
function bubbleSort(arr) {
  let n = arr.length
  for(let i=0;i<n-1;i++) {
    for(let j =0;j<n-1-i;j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}
// <--selection Sort-->
function selectionSort(arr) {
  let n =arr.length
  for(let i=0;i<n-1;i++) {
    let minIndex = i
    for(let j=i+1;j<n;j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
  }
  return arr
}
// <--Insertion Sort-->
function insertionSort(arr) {
  let n = arr.length
  for(let i=1;i<n;i++) {
    let key = arr[i]
    let j = i-1
    while(j>=0&& arr[j] > key) {
      arr[j+1] = arr[j]
      j = j-1
    }
    arr[j+1] = key
  }
  return arr
}
// <--Merge Sort-->
function mergeSort(arr) {
  if(arr.length <=1) return arr
  
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left,right)
}
function merge(left,right) {
  let arr = [] 
  while(left.length !==0 && right.length !== 0) {
    if(left[0] < right[0]) {
      arr.push(left[0])
      left =left.slice(1)
    }else {
      arr.push(right[0])
      right =right.slice(1)
    }
  }
  return arr.concat(left,right)
}

const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  let hasil = {}
  for(let i=0;i<strs.length;i++) {
    // let key = bubbleSort(strs[i].split(''))
    // let key = selectionSort(strs[i].split(''))
    // let key = insertionSort(strs[i].split(''))
    let key = mergeSort(strs[i].split(''))
    if(!hasil[key]) hasil[key] =[strs[i]]
    else hasil[key].push(strs[i])
  }
  return Object.values(hasil)
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
