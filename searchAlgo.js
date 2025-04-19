/*
Soal: Mencari Indeks dalam Array yang Terrotasi (searchRotatedArray)
Wajib menggunakan binary search

Deskripsi: Anda diberikan sebuah array bilangan bulat nums yang terurut secara menaik (dengan nilai-nilai yang berbeda-beda).

Sebelum diserahkan ke dalam fungsi Anda, array nums kemungkinan telah dirotasi pada indeks pivot yang tidak diketahui k (1 <= k < panjang nums) sehingga array yang dihasilkan adalah [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0 berindeks). Sebagai contoh, [0,1,2,4,5,6,7] mungkin dirotasi pada indeks pivot 3 dan menjadi [4,5,6,7,0,1,2].

Diberikan array nums setelah rotasi yang mungkin dan sebuah bilangan bulat target, kembalikan indeks dari target jika terdapat dalam array nums, atau -1 jika tidak ada.

Anda harus menulis algoritma dengan kompleksitas waktu O(log n).


Constraints:

1 <= panjang nums <= 5000
-104 <= nums[i] <= 104
Semua nilai pada nums bersifat unik.
nums adalah array yang terurut secara menaik yang kemungkinan telah dirotasi.
-104 <= target <= 104

  */

const searchRotatedArray = (nums, target) => {
    //code
    let left = 0;
    let right = nums.length-1

    //purpose dari function ini buat cari index dari suatu array yg memiliki nilai sama dengan target

    while (left <= right){ //ketika left memiliki value lebih rendah dari right.. jalankan looping ini
        let mid = Math.floor((right + left) / 2); //1. (7 + 0) /2 = 3.5 = 3
                                                        // 2. (7 + 4) /2 = 5 
                                                        //3. (4+4) /2  = 4 
        if(nums[mid] == target){ // 1.klo misal num[3] == target... return mid nya (num[3] = 7) (dah ketemu berarti targetnya)
            return mid;          // 2. num[5] == 0 ? (num[5] = 1)
                                // 3. nums[4] == 0? (num[4] = 0 ) return midnya
        }else if(nums[mid] > nums[left]){ //1. nums[mid] = nums[3] = 7 dan nums[left] = nums[0] = 4. true berarti lanjutin di kondisi ini 
                                        // 2. nums[mid] = nums[5] = 1 dan nums[left] = nums[6] = 2 false bukan dikondisi ini
            if(nums[left] <= target && nums[mid] >= target){ //1. nums[left] = 4 , target = 0 && nums[mid] = 7 , target = 0 berarti bukan di kondisi ini 
                right = mid -1
            }else{ 
                left = mid + 1
            }
        }else{ 
            if(nums[right] >= target && nums[mid] <= target){ // 1. nums[6] = 2 > 0 && nums[5] = 1 < target? , bukan lanjutkan kondisi selanjutnya
                left = mid + 1
            }else{ // 1. right = 5 -1 = 4
                right = mid - 1
            }
        }
    }
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