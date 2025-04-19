/*
Wajib menggunakan binary search
*/

const searchRotatedArray = (nums, target) => {
  //code
  let l = 0; r = nums.length - 1;
  while(l <= r) {
    let m = Math.floor((l + r) / 2)
    // console.log(l,m,r)
    if (nums[m] === target) {
      return m;
    }
    if (nums[l] <= nums[m]) {
      if (target <= nums[m] && target >= nums[l]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
    if (nums[m] <= nums[r]) {
      if (target >= nums[m] && target <= nums[r]) {
        l = m + 1
      } else {
        r = m - 1
      }
    }
  }
  return -1
};

// Test Case
// console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4
// console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // Output: -1
// console.log(searchRotatedArray([1], 0)); // Output: -1
// console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)); // Output: 1
console.log(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)); // Output: 2
// console.log(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)); // Output: 5
// console.log(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)); // Output: 4
// console.log(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)); // Output: -1
// console.log(searchRotatedArray([3, 1], 1)); // Output: 1
// console.log(searchRotatedArray([5, 1, 3], 5)); // Output: 0

/*
l m r
3 5 7
*/