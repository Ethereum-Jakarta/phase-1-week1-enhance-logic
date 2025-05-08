const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini
  
  let result = {}

  for(let i = 0; i < strs.length;i++){
    //let sortedAlgo = bubbleSort([...strs[i]])
    //let sortedAlgo = selectionSort([...strs[i]])
    //let sortedAlgo = insertionSort([...strs[i]])
    let sortedAlgo = mergeSort([...strs[i]])
    !result[sortedAlgo] ? result[sortedAlgo] = [strs[i]] : result[sortedAlgo].push(strs[i])
  }

  return Object.values(result)
};

//bubble sort
const bubbleSort = arr => {
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j < arr.length;j++){
      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    } 
  }

  return arr
}

//selection sort
const selectionSort = arr => {
  for(let i = 0;i< arr.length;i++){
    let minIndex = i
    for(let j = i + 1;j < arr.length;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

//insertion sort
const insertionSort = arr => {
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr
}

//merge sort
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