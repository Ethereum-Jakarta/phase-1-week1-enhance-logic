const searchRotatedArray = (nums, target) => {
  // Modified Binary Search

  // initialize the pointers.
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // find the middle element of the array.
    let mid = Math.floor((left + right) / 2);

    // if the middle element is the target element then return the mid index.
    if (nums[mid] === target) {
      return mid;
    }

    // if the left half of the array is sorted (middle element is greater than the element at left index).
    if (nums[left] <= nums[mid]) {
      // checks if the target lies between left and mid then updates the right pointer accordingly.
      if (nums[left] <= target && nums[mid] >= target) {
        right = mid - 1;
      }
      // otherwise, it checks if the target lies between mid and right then updates the left pointer accordingly.
      else {
        left = mid + 1;
      }
    }

    // if the right half of the array is sorted (middle element is less than the element at left index).
    if (nums[left] >= nums[mid]) {
      // checks if the target lies between mide and right then updates the left pointer accordingly.
      if (nums[right] >= target && nums[mid] <= target) {
        left = mid + 1;
      }
      // otherwise, it checks if the target lies between left and mid then updates the right pointer accordingly.
      else {
        right = mid - 1;
      }
    }
  }

  // if the left pointer becomes greater than the right pointer (target element not found) return -1.
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
