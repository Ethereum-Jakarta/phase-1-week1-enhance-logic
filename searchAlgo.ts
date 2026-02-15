// CONSTRAINT
// 1 <= panjang nums <= 5000
// -104 <= nums[i] <= 104
// Semua nilai pada nums bersifat unik.
// nums adalah array yang terurut secara menaik yang kemungkinan telah dirotasi.
// -104 <= target <= 104
function searchRotatedArray<T extends number[], K extends T[number]>(array: T, target: K): number {
  let left = 0, right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left+right)/2);
    if (array[middle] === target) return middle;
    if (array[left] <= array[middle]) {
      if (target >= array[left] && target < array[middle]) right = middle - 1;
      else left = middle + 1;
    } else {
      if (target > array[middle] && target < array[right]) left = middle + 1;
      else right = middle - 1;
    }
  }
  return -1;
}


// Test Case
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log(searchRotatedArray([1], 0)); // Output: -1
console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)); // Output: 1
console.log(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)); // Output: 2
console.log(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)); // Output: 5
console.log(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)); // Output: 4
console.log(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)); // Output: -1
console.log(searchRotatedArray([3, 1], 1)); // Output: 1
console.log(searchRotatedArray([5, 1, 3], 5)); // Output: 0
