/*
LOGIC NOLEP (sortingAlgo.js)
Diberikan sebuah array dari string strs, kelompokkan anagram-anagram secara bersama-sama. 
Anda bisa mengembalikan jawaban dalam urutan apa pun.

Sebuah Anagram adalah kata atau frasa yang terbentuk dari pengurutan ulang huruf-huruf 
dari kata atau frasa lain yang berbeda, biasanya menggunakan semua huruf asli tepat sekali.

Contoh 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Contoh 2:
Input: strs = [""]

Output: [[""]]

Contoh 3:
Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] terdiri dari huruf-huruf kecil dalam bahasa Inggris.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    // Implementasi akan datang di sini

    let obj = {}
    let res = []

    for (let i = 0; i < strs.length; i++) {
        let sorted = mergeSort([...strs[i]])
        
        if(obj[sorted]===undefined){
            obj[sorted]=[strs[i]]
        }else{
            obj[sorted].push(strs[i])
        }
    }

    return Object.values(obj)


  };

function bubbleSort(strs){
    
    for (let i = 0; i < strs.length - 1; i++) {
        for (let j = 0; j < strs.length - i - 1; j++) {
            if(strs[j] > strs[j+1]){
                let temp = strs[j]
                strs[j] = strs[j+1]
                strs[j+1] = temp
            }
            
        }
        
    }
    return strs
  }

  function selectionSort(strs){
    for (let i = 0; i < strs.length - 1; i++) {
        let minIndex = i
        
        for (let j = i; j < strs.length; j++) {
            if(strs[j] < strs[minIndex]){
                minIndex = j
            }
            
        }

        let temp = strs[i]
        strs[i] = strs[minIndex]
        strs[minIndex] = temp


    }
    return strs
  }

  function insertionSort(strs) {
    for (let i = 1; i < strs.length; i++) {
        let current = strs[i]
        let j = i - 1

        while(j>=0 && strs[j] > current){
            strs[j+1] = strs[j]
            j--
        }

        strs[j+1]=current
        
    }
    return strs
  }
  
  function mergeSort(strs) {
    if(strs.length <= 1){
        return strs
    }
    const middle = Math.floor(strs.length / 2);
    const left = strs.slice(0, middle);
    const right = strs.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
  }

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
  
  
//   kerjakan 1 soal ini dengan 4 sorting algo yang kita sudah pelajarin, boleh kalian buat modular function setiap sorting dan implement ke groupAnagrams(). 
  



