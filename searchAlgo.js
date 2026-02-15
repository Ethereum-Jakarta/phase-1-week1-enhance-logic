const searchRotatedArray = (nums, target) => {
  const n = nums.length;
  let left = 0,
    right = n - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      // 3 <= 4 && 4 < 5
      // apakah element nums[left] <= target && target lebih kecil < element nums[mid]
      // memeriksa, apakah target berada pada bagian kolom "kiri"
      if (nums[left] <= target && target < nums[mid]) {
        // jika iya, right dipindahkan pada (mid - 1);
        right = mid - 1;
      } else {
        // jika tidak, left dipindahkan pada (mid + 1);
        left = mid + 1;
      }
    } else {
      // 5 < 4 && 4 <= 4
      // jika target lebih kecil dari element nums[mid] && target <= element nums[right]
      // memeriksa, apakah target berada dalam rentang yang terurut di sisi kanan.
      if (nums[mid] < target && target <= nums[right]) {
        // jika iya, left pindahkan pada (mid + 1)
        left = mid + 1;
      } else {
        // jika tidak, right dipindahkan pada (mid - 1)
        right = mid - 1;
      }
    }
  }

  return -1;
};

// Test Case
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
console.log("");
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
console.log("");
console.log(searchRotatedArray([1], 0)); // Output: -1
console.log("");
console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)); // Output: 1
console.log("");
console.log(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)); // Output: 2
console.log("");
console.log(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)); // Output: 5
console.log("");
console.log(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)); // Output: 4
console.log("");
console.log(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)); // Output: -1
console.log("");
console.log(searchRotatedArray([3, 1], 1)); // Output: 1
console.log("");
console.log(searchRotatedArray([5, 1, 3], 5)); // Output: 0
