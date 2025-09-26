/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const map = {};
    const mergeSort = (str) => {
        const n = str.length;

        if (n <= 1) return str;

        const middle = Math.floor(n / 2);
        const left = str.slice(0, middle);
        const right = str.slice(middle);

        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        return merge(sortedLeft, sortedRight);
    }

    const merge = (left, right) => {
        let result = [];
        let idxLeft = 0;
        let idxRight = 0;

        while (idxLeft < left.length && idxRight < right.length) {
            if (left[idxLeft] < right[idxRight]) {
                result.push(left[idxLeft]);
                idxLeft++;
            } else {
                result.push(right[idxRight]);
                idxRight++;
            }
        }
        return result.concat(left.slice(idxLeft).concat(right.slice(idxRight)));
    }

    for (let word of strs) {
        let sorted = mergeSort(word.split('')).join('');
        if (!map[sorted]) {
            map[sorted] = [];
        }
        map[sorted].push(word);
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