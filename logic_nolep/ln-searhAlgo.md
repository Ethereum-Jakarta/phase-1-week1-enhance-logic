# LOGIC NOLEP (searchAlgo.js)

`Soal: Mencari Indeks dalam Array yang Terrotasi (searchRotatedArray)`

_Wajib menggunakan binary search_

Deskripsi: Kalian diberikan sebuah array bilangan bulat nums yang terurut secara menaik (dengan nilai-nilai yang berbeda-beda).

Sebelum diserahkan ke dalam fungsi Kalian, array nums kemungkinan telah dirotasi pada indeks pivot yang tidak diketahui k (1 <= k < panjang nums) sehingga array yang dihasilkan adalah [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0 berindeks). Sebagai contoh, [0,1,2,4,5,6,7] mungkin dirotasi pada indeks pivot 3 dan menjadi [4,5,6,7,0,1,2].

Diberikan array nums setelah rotasi yang mungkin dan sebuah bilangan bulat target, kembalikan indeks dari target jika terdapat dalam array nums, atau -1 jika tidak ada.

Kalian harus menulis algoritma dengan kompleksitas waktu O(log n).

Contoh 1:

```
Input: nums = [4,5,6,7,0,1,2], target = 0

Output: 4
```

Contoh 2:

```
Input: nums = [4,5,6,7,0,1,2], target = 3

Output: -1
```

0
Contoh 3:

```
Input: nums = [1], target = 0

Output: -1
```

Constraints:

- 1 <= panjang nums <= 5000
- -104 <= nums[i] <= 104
- Semua nilai pada nums bersifat unik.
- nums adalah array yang terurut secara menaik - yang kemungkinan telah dirotasi.
- -104 <= target <= 104

```js
const searchRotatedArray = (nums, target) => {
  //code
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
```
