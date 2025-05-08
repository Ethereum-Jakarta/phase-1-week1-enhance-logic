const searchRotatedArray = (nums, target) => {
  //code
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (nums[mid] == target) {
      return mid;
    } else {
      // urut sisi kanan
      if (nums[start] <= nums[mid]) {
        if (target >= nums[start]) {
          if (target < nums[mid]) {
            end = mid - 1;
          } else {
            start = mid + 1;
          }
        } else {
          start = mid + 1;
        }
      } else {
        // urut sisi kiri
        if (nums[end] >= nums[mid]) {
          if (nums[end] >= target && target >= nums[mid]) {
            start = mid + 1;
          } else {
            end = mid - 1;
          }
        }
      }
    }
  }
  return -1;
};

console.log(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 5));
