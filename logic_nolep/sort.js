
/**
 * @param {string[]} strs
 * @return {string[][]}
 */


//Bubble Sort Algorithm
function bubbleSort(str){
    let n = str.length;

    // Outside loop
    for (let j = 0; j < n-1; j++){
        for (let k = 0; k < n - j - 1; k++){
            if (str[k] < str[k+1]){
                let temp = str[k];
                str[k] = str[k+1];
                str[k+1] = temp;
            }
        }
    }

    return str;
}

//Selection Sort Algorithm
function selectionSort(str){
    let n = str.length;

    //Outside loop
    for (let j = 0; j < n-1; j++){
        let minIndex = j;
        
        // Loop for unsorted area and search for the smallest value
        for (let k = j+1; k < n; k++){
            if (str[minIndex] > str[k]){
                minIndex = k;
            }
        }

        // Change the value of str[j] to str[minIndex]
        let temp = str[j];
        str[j] = str[minIndex];
        str[minIndex] = temp;
    }
    return str;
}

// Insertion Sort Algorithm
function insertionSort(str){
    let n = str.length;

    // Start from the second index
    for (j = 1; j < n; j++){
        let current = str[j];
        let k = j - 1;

        // Move the greater value to the next index
        while (k >= 0 && str[k] > current){
            str[k+1] = str[k];
            k--;
        }

        // Put the current value in right place
        str[k+1] = current;
    }

    return str;
}

// Merge Sort Algorithm
function merge(left, right){
    let combined = [];
    let j = 0;
    let k = 0;
    while(j < left.length && k < right.length){
        if (left[j] < right[k]){
            combined.push(left[j]);
            j++;
        } else {
            combined.push(right[k]);
            k++;
        }
    }
    return combined.concat(left.slice(j).concat((right.slice(k))))
}
function mergeSort(str){
    if (str.length === 1) return [str];
    let mid = Math.floor(str.length/2);
    let left = str.slice(0, mid);
    let right = str.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

const groupAnagrams = function(strs, sortFunc) {

    if (strs.length === 1) return strs;

    let n = strs.length;
    let obj = {};

    for (i = 0; i < n; i++){
        let word = strs[i].split("");
        let wordSort = sortFunc(word).join("");
        if (!obj[wordSort]) {
            obj[wordSort] = []
        } obj[wordSort].push(strs[i]);
    }

    let result = [];
    for (const keys in obj){
        result.push(obj[keys]);
    }
    return result;
};

// Test Case 1
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"], bubbleSort)); 
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Test Case 2
console.log(groupAnagrams([""], selectionSort)); 
// Output: [[""]]

// Test Case 3
console.log(groupAnagrams(["a"], insertionSort)); 
// Output: [["a"]]

// Test Case 4
console.log(groupAnagrams(["listen", "silent", "hello", "world"], mergeSort)); 
// Output: [["listen","silent"],["hello"],["world"]]

// Test Case 5
console.log(groupAnagrams(["rat", "tar", "art", "car"], bubbleSort)); 
// Output: [["rat","tar","art"],["car"]]

// Test Case 6
console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"], selectionSort)); 
// Output: [["apple","leapp"],["banana"],["grape"],["orange"]]

// Test Case 7
console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"], insertionSort)); 
// Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]
