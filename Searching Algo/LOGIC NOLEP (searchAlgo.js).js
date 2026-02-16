const searchRotatedArray = (nums, target) => {
    //code
    let p = pivotSearch(nums,target) //n
    let r =binarySearch(nums.sort(),target) //(logn)
    if(r == -1){
        return r;
    }
    if(p+r>nums.length-1){
        return p+r - nums.length
    }
    return p+r
   // return binarySearch(nums,target)
};

function pivotSearch(array){
    let l =0;
    let r = array.length-1;
    let m = 0;

    while(l <= r){
        while(!(array[l] <= array[r])){
            l++
        }
        return l
    }
}

// n (log n)

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Elemen tidak ditemukan
}

// // Test Case
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