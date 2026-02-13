/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagramsBS = function(strs) {

    let strSort = []
    for(let s=0;s<strs.length;s++){
        let arr = strs[s].split('')
        let n = arr.length;
        // Loop luar untuk melakukan iterasi
        for (let i = 0; i < n - 1; i++) {
      
          // Loop dalam untuk perbandingan
          for (let j = 0; j < n - i - 1; j++) {
            // Membandingkan elemen berdekatan
            // console.log(arr[j] > arr[j + 1])
            if (arr[j] > arr[j + 1]) {
              // Tukar arr[j] dan arr[j+1]
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
            }
            // console.log(arr)
          }
        }
        strSort.push(arr.join(''))
    }

    let memo = {};
    let result = [];
    // console.log(groups)
    for (let i = 0; i < strs.length; i++) {

        if (memo[strSort[i]] === undefined) {
          memo[strSort[i]] = result.length;
          result[memo[strSort[i]]] = [strs[i]];
        } else {
          result[memo[strSort[i]]].push(strs[i])
        }
      }
      return result;
    // Implementasi akan datang di sini

  };
  console.log("bubble sort")
  // Test Case 1
  console.log(groupAnagramsBS(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagramsBS([""])); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagramsBS(["a"])); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagramsBS(["listen", "silent", "hello", "world"])); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagramsBS(["rat", "tar", "art", "car"])); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagramsBS(["apple", "banana", "leapp", "grape", "orange"])); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagramsBS(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]

  console.log("Selection Sort")
const groupAnagramsSS = function(strs) {

    let strSort = []
    for(let s=0;s<strs.length;s++){
        let arr = strs[s].split('')
        // start sort
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
        // finish sort
        strSort.push(arr.join(''))
    }

    let memo = {};
    let result = [];
    // console.log(groups)
    for (let i = 0; i < strs.length; i++) {

        if (memo[strSort[i]] === undefined) {
          memo[strSort[i]] = result.length;
          result[memo[strSort[i]]] = [strs[i]];
        } else {
          result[memo[strSort[i]]].push(strs[i])
        }
      }
      return result;
    // Implementasi akan datang di sini

  };
  
  // Test Case 1
  console.log(groupAnagramsSS(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagramsSS([""])); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagramsSS(["a"])); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagramsSS(["listen", "silent", "hello", "world"])); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagramsSS(["rat", "tar", "art", "car"])); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagramsSS(["apple", "banana", "leapp", "grape", "orange"])); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagramsSS(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]

  
  console.log("Insertion Sort")
const groupAnagramsIS = function(strs) {

    let strSort = []
    for(let s=0;s<strs.length;s++){
        let arr = strs[s].split('')
        // start sort
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
        // finish sort
        strSort.push(arr.join(''))
    }

    let memo = {};
    let result = [];
    // console.log(groups)
    for (let i = 0; i < strs.length; i++) {

        if (memo[strSort[i]] === undefined) {
          memo[strSort[i]] = result.length;
          result[memo[strSort[i]]] = [strs[i]];
        } else {
          result[memo[strSort[i]]].push(strs[i])
        }
      }
      return result;
    // Implementasi akan datang di sini

  };
  
  
  // Test Case 1
  console.log(groupAnagramsIS(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagramsIS([""])); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagramsIS(["a"])); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagramsIS(["listen", "silent", "hello", "world"])); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagramsIS(["rat", "tar", "art", "car"])); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagramsIS(["apple", "banana", "leapp", "grape", "orange"])); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagramsIS(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
  console.log("Merge Sort")
const groupAnagramsMS = function(strs) {

    let strSort = []
    for(let s=0;s<strs.length;s++){
        let arr = strs[s].split('')
        // start sort
        arr = mergeSort(arr)
        // Dimulai dari elemen kedua (indeks 1)

        // finish sort
        strSort.push(arr.join(''))
    }

    let memo = {};
    let result = [];
    // console.log(groups)
    for (let i = 0; i < strs.length; i++) {

        if (memo[strSort[i]] === undefined) {
          memo[strSort[i]] = result.length;
          result[memo[strSort[i]]] = [strs[i]];
        } else {
          result[memo[strSort[i]]].push(strs[i])
        }
      }
      return result;
    // Implementasi akan datang di sini

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
  
  
  // Test Case 1
  console.log(groupAnagramsMS(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagramsMS([""])); 
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagramsMS(["a"])); 
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagramsMS(["listen", "silent", "hello", "world"])); 
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagramsMS(["rat", "tar", "art", "car"])); 
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagramsMS(["apple", "banana", "leapp", "grape", "orange"])); 
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagramsMS(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
