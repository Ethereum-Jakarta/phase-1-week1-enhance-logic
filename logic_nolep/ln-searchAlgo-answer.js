const searchRotatedArray = (nums, target) => {
    // use my logic
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === target) {
    //         found = true;
    //         return i
    //     }
    // }

    // return -1;

    //use binarySearch
    // let sorted = nums//bubbleShort(nums);
    // console.log("sorted:", sorted);
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};

// function bubbleShort(num) {
//     for (let i = 0; i < num.length - 1; i++) {
//         for (let j = 0; j < num.length - i - 1; j++) {
//             if (num[j] > num[j + 1]) {
//                 let temp = num[j];
//                 num[j] = num[j + 1];
//                 num[j + 1] = temp;
//             }
//         }
//     }

//     return num;
// }

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

