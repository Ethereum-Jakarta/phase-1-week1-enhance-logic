function searchRotatedArray(nums, target) {


   let  left = 0; // value kasih 0 untuk penghitungan tiap array dimulai dari 0
    let  right = nums.length - 1;// untuk array dimulai 0 jadi perlu di kurang 1 agar jumlahnya pas
   


    while (left <= right) { // disini melakukan pengecheckan kondisi apakah left lebih kecil dari right
        
        const mid = Math.floor((left + right) / 2); // mengambil titik target untu dilakukan pemisahan antara kiri dan kanan
        if (nums[mid] === target) { // kondisi untuk melihat apakah array nums yang di cari sesuai dengan target
            return mid; // Mengembalikan indeks elemen yang ditemukan
        } else if (nums[left]<=nums[mid]){ // check sebelah kiri dari target yang dibuat(mid), dan condisi dibuat agar bisa mengecheck secara berurut karan kalau tidak berurut akan menghasil -1
                if(nums[left]<= target && target <nums[mid]){ //butuh membuat kodisi agar dicheck kembali apakah hasil dari num[left] lebih kecil dari target dan harus mengecheck apakah target lebih kecil dari nums[mid]
                    right =mid-1; // mid dikurangkan agar bisa untuk posisi array berganti
                }else{ // apabila tidak masuk kondisi 1 lanjut kondisi ini
                    left=mid+1; // hasilnya yaitu menambahkan mid agar hasil dari left bisa mendapatkan posisi yang lain
                }
        }else{// ini kondisi apabila kodisi pertama tidak sesuai jadi nums[left]>=nums[right]
            if(nums[right]<=target && target < nums[mid]){ // untuk mengabil sebelah kanan, dan melihat bats untuk bagian kanan jaraknya
                left=mid+1;// hasilnya yaitu menambahkan mid agar hasil dari left bisa mendapatkan posisi yang lain
            }else{
                right=mid-1;// mid dikurangkan agar bisa untuk posisi array berganti
            }
        }
        
    }

    return -1; // Mengembalikan -1 jika elemen tidak ditemukan
   
}

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