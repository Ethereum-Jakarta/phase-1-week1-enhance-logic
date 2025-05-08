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

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 const groupAnagrams = function(strs) {
  // Implementasi akan datang di sini

  // buat objek untuk menyimpan key dan value
  let obj = {}

  // jika panjang input <= 1 akan mengembalikan input itu sendiri
  if ( strs.length <= 1 ) return [strs];

  // jika panjang input > 1, lakukan perulangan untuk setiap input
  for ( let str of strs ) {
  	// urutkan char elem dari setiap input
  	let letter = mergeSort(str.split('')).join('')

  	// jika obj[letter] belum ada, buat obj[letter] beirisi array dengan isi elem dari input
  	if ( !obj[letter] ) {
  		obj[letter] = [str]
  	} else { // jika tidak, isi obj[letter] dengan array elem dari input
  		obj[letter].push(str)
  	}
  }

  // kembalikan values dari obj
  return Object.values(obj)
  // return obj
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