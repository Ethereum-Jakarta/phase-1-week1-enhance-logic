/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const mergeSort = (str) => {
        if (str.length <= 1) return str.split('');

        const mid = Math.floor(str.length / 2);
        const left = str.slice(0, mid);
        const right = str.slice(mid);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return merge(sortedLeft, sortedRight);
    }

    const merge = (left, right) => {
        let result = [];
        let leftIdx = 0;
        let rightIdx = 0;

        while (leftIdx < left.length && rightIdx < right.length) {
            if (left[leftIdx] < right[rightIdx]) {
                result.push(left[leftIdx]);
                leftIdx++;
            } else {
                result.push(right[rightIdx]);
                rightIdx++;
            }
        }
        return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
    }

    const map = {};

    for (let sentence of strs) {
        let sorted = mergeSort(sentence).join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(sentence);
    }
    return Object.values(map);
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