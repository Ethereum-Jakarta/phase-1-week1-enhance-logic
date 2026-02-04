/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 1. bubble sort
// const groupAnagrams = function(strs) {
//     let obj = {};

//     for (let i = 0; i < strs.length; i++) {
//         // pecah strs[i] menjadi array of characters, misal 'eat' => ['e', 'a', 't']
//         let arr = strs[i].split('');

//         // implementasi bubble sort
//         for (let j = 0; j < arr.length-1; j++) {
//             for (let k = 0; k < arr.length-j-1; k++) {
//                 if (arr[k] > arr[k+1]) {
//                     let temp = arr[k];
//                     arr[k] = arr[k+1];
//                     arr[k+1] = temp;
//                 }
//             }
//         }

//         // join arr agar menjadi string, misal: ['a', 'e', 't'] => 'aet'
//         let sortedArr = arr.join('');

//         if (!obj[sortedArr]) {
//             obj[sortedArr] = [];
//         }

//         // push kata sesuai sortedArr
//         obj[sortedArr].push(strs[i]);
//     }

//     return Object.values(obj);
//   };



// 2. selection sort
// const groupAnagrams = function(strs) {
//     let obj = {};
    
//     for (let i = 0; i < strs.length; i++) {
//         let arr = strs[i].split('');

//         // implementasi selection sort
//         for (let j = 0; j < arr.length; j++) {
//             let minIndex = j;

//             for (let k = j+1; k < arr.length; k++) {
//                 if (arr[minIndex] > arr[k]) {
//                     minIndex = k;
//                 }
//             }

//             let temp = arr[j];
//             arr[j] = arr[minIndex];
//             arr[minIndex] = temp;
//         }

//         let sortedArr = arr.join('');

//         if (!obj[sortedArr]) {
//             obj[sortedArr] = [];
//         }
            
//         obj[sortedArr].push(strs[i]);
//     }

//     return Object.values(obj)
//   };



// 3. insertion sort
// const groupAnagrams = function(strs) {
//     let obj = {};

//     for (let i = 0; i < strs.length; i++) {
//         let arr = strs[i].split('');

//         // implementasi insertion sort
//         for (let j = 1; j < arr.length; j++) {
//             let current = arr[j];
//             let k = j-1;

//             while (k >= 0 && arr[k] > current) {
//                 arr[k+1] = arr[k];
//                 k--;
//             }

//             arr[k+1] = current;
//         }

//         let sortedArr = arr.join('');

//         if (!obj[sortedArr]) {
//             obj[sortedArr] = [];
//         }

//         obj[sortedArr].push(strs[i]);
//     }

//     return Object.values(obj);
//   };


// 4. merge sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let res = [];
    let leftIndex = 0; 
    let rightIndex = 0; 

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] <= right[rightIndex]) {
            res.push(left[leftIndex]);
            leftIndex++;
        } else {
            res.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return res.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const groupAnagrams = function(strs) {
    let obj = {};

    for (let i = 0; i < strs.length; i++) {
        let arr = strs[i].split('');
        arr = mergeSort(arr);

        let sortedArr = arr.join('');

        if (!obj[sortedArr]) {
            obj[sortedArr] = []
        }

        obj[sortedArr].push(strs[i]);
    }
    
    return Object.values(obj);
  };
  
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