const searchRotatedArray = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //important! make mid var
    let mid = Math.floor((left + right) / 2);

    //if mid num is target, end the loop and return mid index
    if (nums[mid] === target) {
      return mid;
    }

    //if left num < mid num = elemen array kiri sampai mid harusnya sorted
    //if left num === mid num = seharusnya tinggal 2 elemen, left right
    if (nums[left] <= nums[mid]) {
      //if the target is between the left and mid, loop nya jadikan left sampai sebelum mid
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        //if not, the target may be between mid and right, so change the loop starts from mid + 1
        left = mid + 1;
      }
    }
    //if not, elemen array dari tengah sampai kanan must be sorted
    else {
      //if target is between mid and right, change the loop starts from mid
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        //if not, the target may be from left until mid (that are not sorted), change the loop dari left sampai sebelum mid
        right = mid - 1;
      }
    }
  }

  //kalau operasi di atas elemen array nya tinggal 1 dan belum menemukan target
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
