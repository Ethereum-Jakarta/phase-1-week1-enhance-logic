/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//bubble sort algo
function bubblesSort(arr) {
    let n = arr.length;
    let obj = {};
    let result = [];
    
    for (let i = 0; i < n ; i++) {   //iterasi setiap elemen (kata) di dalam array
        let word = arr[i].split("");
        for (let j = 0; j < word.length; j++) {     //bubble sort mengurutkan huruf dalam kata
            for (let k = 0; k < word.length - 1; k++) {
                if (word[k] > word[k + 1]) {
                    let temp = word[k];
                    word[k] = word[k + 1];
                    word[k + 1] = temp;
                }
            }
        }

        //menggabungkan huruf yang sudah di sorting;
        word = word.join("");
        // console.log(word)

        //mengelompokkan kata 
        if (!obj[word]) {
            obj[word] = [];
            obj[word].push(arr[i]);
        } else {
            obj[word].push(arr[i]);
        }

    }
    
    //merge value obj untuk result

    for(const key in obj) {
        result.push(obj[key])
    }
    return result;
}


//selection sort algo
function selectionSort(arr) {
    let n = arr.length;
    let obj = {};
    let result = [];
    
    for (let i = 0; i < n ; i++) {   //iterasi setiap elemen (kata) di dalam array
        let word = arr[i].split("");
        for (let j = 0; j < word.length - 1; j++) {     //selection sort mengurutkan huruf dalam kata
            let minIndex = j;
            for (let k = j + 1; k < word.length; k++) {
                if (word[k] < word[minIndex]) {
                    minIndex = k;
                }
            }

            let temp = word[j];
            word[j] = word[minIndex];
            word[minIndex] = temp;
        }
        // console.log(word)

        //menggabungkan huruf yang sudah di sorting;
        word = word.join("");
        // console.log(word)

        //mengelompokkan kata 
        if (!obj[word]) {
            obj[word] = [];
            obj[word].push(arr[i]);
        } else {
            obj[word].push(arr[i]);
        }
        // console.log(obj)
    }
    
    //merge value obj untuk result

    for(const key in obj) {
        result.push(obj[key])
    }
    return result;
}



//insertion sort algo
function insertionSort(arr) {
    let n = arr.length;
    let obj = {};
    let result = [];
    
    for (let i = 0; i < n ; i++) {   //iterasi setiap elemen (kata) di dalam array
        let word = arr[i].split("");
        for (let j = 1; j < word.length; j++) {     //insertion sort mengurutkan huruf dalam kata
            let current = word[j];
            let k = j - 1;

            while (k >= 0 && word[k] > current) {
                word[k + 1] = word[k];
                k--;
            }
            word[k + 1] = current;
        }

        //menggabungkan huruf yang sudah di sorting;
        word = word.join("");
        // console.log(word)

        //mengelompokkan kata 
        if (!obj[word]) {
            obj[word] = [];
            obj[word].push(arr[i]);
        } else {
            obj[word].push(arr[i]);
        }
        // console.log(obj)
    }
    
    //merge value obj untuk result

    for(const key in obj) {
        result.push(obj[key])
    }
    return result;
}


//merge sort algo
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

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

function mergeAlgo(arr) {
    let n = arr.length;
    let obj = {};
    let result = [];
    
    for (let i = 0; i < n ; i++) {   //iterasi setiap elemen (kata) di dalam array
        let word = arr[i].split("");
        
        //MAIN ALGO
        word = mergeSort(word);

        // console.log(word)

        //menggabungkan huruf yang sudah di sorting;
        word = word.join("");
        // console.log(word)

        //mengelompokkan kata 
        if (!obj[word]) {
            obj[word] = [];
            obj[word].push(arr[i]);
        } else {
            obj[word].push(arr[i]);
        }
        // console.log(obj)
    }
    
    //merge value obj untuk result

    for(const key in obj) {
        result.push(obj[key])
    }
    return result;
}

const groupAnagrams = function(strs) {
//   Implementasi akan datang di sini
  console.log('');
  console.log('Bubble Sort Algorithm:');
  console.log(bubblesSort(strs));

  console.log('');
  console.log('Selection Sort Algorithm:');
  console.log(selectionSort(strs));

  console.log('');
  console.log('Insertion Sort Algorithm:');
  console.log(insertionSort(strs));

  console.log('');
  console.log('Merge Sort Algorithm:');
  console.log(mergeAlgo(strs));
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