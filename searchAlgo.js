const searchRotatedArray = (nums, target) => {
    //code
    // console.log("---------")
    step = Math.round(nums.length/4)
    // console.log(nums.slice(step,nums.length))
    // console.log(nums[0])
    // console.log(target)
    if(target==nums[0]){
        return 0
    } 
    if(nums.length<2){
            return -1

    } 
    if(target<=nums[0]){
        let a = 0
        while(nums[a+step]>nums[a]){
            // console.log(a,"pertama")
            a+=step
        }
        // console.log(a+step)
        while(nums[a+step]<=target){
            // console.log(a+step,"kedua")
            a+=step
        }
        // console.log(a+step)
        while(nums[a+step]>=target||!nums[a+step]){
            // console.log(a,"kedua")
            if(nums[a+step]==target){
                return a+step
            }
            a--
        }
        // console.log("tidak ada")
    } else {
        let a=0
        while(nums[a+step]<target&&nums[a+step]>nums[0]){
            // console.log(a+step,"kedua")
            a+=step
        }
        // console.log(a+step)
        for(let b=a+step;b>a;b--){
            if(nums[b]>=target||!nums[b]){
                if(nums[b]==target){
                   return b
                }
            }
            if(nums[b]<=nums[b-step]){
                if(nums[b]==target){
                    return b
                 }
            }
        }
    }

    // console.log(nums)
    // let left = 0;
    // let right = nums.length - 1;
    // let mid = Math.floor((left + right) / 2);
    // if(nums[left]<nums[mid]){
    //     // left sesuai
    //     if(nums[mid] == target){
    //         return mid
    //     }
    //     if(nums[left] == target){
    //         return left
    //     }
    //     if(target<=nums[mid] && target>nums[left]){
    //         return searchRotatedArray(nums.slice(0,mid), target)        
    //     }

    // } else {
    //     console.log("right sesuai")
    // }
    // while (left <= right) {
    //     if (nums[mid] === target) {
    //         return mid; // Mengembalikan indeks elemen yang ditemukan
    //     } else if (nums[mid] < target) {
    //         left = mid + 1;
    //     } else {
    //         right = mid - 1;
    //     }
    // }
    // return -1; // Mengembalikan -1 jika elemen tidak ditemukan
    return -1
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