const searchRotatedArray = (nums, target) => {
    //code
    let start = 0
    let end = nums.length - 1
    //pivot
    const findPivot = (start, end) => {
        while(start < end){
            let mid = Math.floor((start + end)/2)

            if(nums[mid] > nums[end]){
                start = mid + 1
            }else{
                end = mid
            }
        }

        return start
    }

    //binary search
    const binarySearch = (start, end) => {
        while(start <= end){
            let mid = Math.floor((start + end)/2)

            if(target === nums[mid]){
                return mid 
            }else if(target > nums[mid]){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }

        return -1
    }

    //hasil 
    const pivot = findPivot(start, end)

    if(target >= nums[pivot] && target <= nums[end]){
        return binarySearch(pivot, end)
    }else{
        return binarySearch(start, pivot -1)
    }
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