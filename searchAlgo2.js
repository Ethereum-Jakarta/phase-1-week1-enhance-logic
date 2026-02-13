const searchRotatedArray = (nums, target) => {
    //code
    if(nums.length<3){
        if(nums[1]==target){
            return 1
        } else if(nums[0]==target){
            return 0
        } else {
            return -1
        }
    }
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((left + right) / 2);
    // console.log(mid)
    // console.log(nums.slice(0,mid))
    // console.log(nums.slice(mid+1,nums.length))

    if(nums[mid]==target){
        return mid
    }
    if(nums[left]<nums[mid]){
        if(target<nums[mid]&&target>=nums[0]){
            return searchArray(nums.slice(0,mid),target)
        } else {
            if(searchRotatedArray(nums.slice(mid,nums.length),target)==-1){
                return -1
            } else {
                return mid + searchRotatedArray(nums.slice(mid,nums.length),target)
            }
        }
    } else {
        if(target>nums[mid]&&target<=nums[nums.length-1]){
            if(searchArray(nums.slice(mid,nums.length),target)==-1){
                // console.log("1111")
                return -1
            } else {
                // console.log("1112")
                return mid +searchArray(nums.slice(mid,nums.length),target)
            }
        } else {
            // console.log("1113")
            return searchRotatedArray(nums.slice(0,mid),target)
        }
    }

    // return -1; // Mengembalikan -1 jika elemen tidak ditemukan
};

function searchArray(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Mengembalikan indeks elemen yang ditemukan
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    // return -1; // Mengembalikan -1 jika elemen tidak ditemukan
}

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