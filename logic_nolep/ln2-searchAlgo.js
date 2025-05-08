const searchRotatedArray = (nums, target) => {
  let left = 0; // first index
  let right = nums.length - 1; // last index

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // middle index

    // target found
    if (nums[mid] === target) {
      return mid;
    }

    // left sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1; // element exists
      } else {
        left = mid + 1; // element doesn't exist
      }
    }
    // right sorted
    else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1; // element exists
      } else {
        right = mid - 1; // element doesn't exist
      }
    }
  }

  // target not found
  return -1;
};

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