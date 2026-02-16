const searchRotatedArray = (nums, target) => {
  //code
  let leftPosition = 0;
  let rightPosition = nums.length - 1;

  while (leftPosition <= rightPosition) {
    const midPosition = Math.floor((leftPosition + rightPosition) / 2);
    if (nums[midPosition] === target) return midPosition;

    if (nums[leftPosition] <= nums[midPosition]) {
      if (nums[leftPosition] <= target && target < nums[midPosition]) {
        rightPosition = midPosition - 1;
      } else {
        leftPosition = midPosition + 1;
      }
    } else {
      if (nums[rightPosition] >= target && target < nums[midPosition]) {
        leftPosition = midPosition + 1;
      } else {
        rightPosition = midPosition - 1;
      }
    }
  }

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
