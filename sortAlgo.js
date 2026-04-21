
// memakai Algoritma Selection Sort
function groupAnagrams(strs) {
    function selectionSort(str) { // pertama kita buat function untuk mengurutkan hurufnya 
      for(let i = 0; i < str.length; i++) {
        let nilIndex = i; // ini kita kasi value i agar membantu untuk melihat nilai yg dimasukan ke dalam arraynya
  
        for(let j = i + 1; j < str.length; j++) {// melakukan perulangan utnuk membandingkan nilai karakter kalau seadnya lebih kecil dari yang nilai di belakang tukar, tapi kalau tidak dibiar kan saja
          if(str[j] < str[nilIndex]) { // kondisi pengecekan dengan nilai pertama nya apakah lebih kecil atau tidak
            nilIndex = j; // kalau iya tukar nilainya
          }
        }
  
        let temp = str[i];  // buat varialbel penampung temp dengan isi array[i];
        str[i] = str[nilIndex]; //kemudian tukar nilai str[i] dengan strnilaiindex, untuk nilaiindexini diambil dari let atau sudah diubah di j
        str[nilIndex] = temp;// tukar kembali
      }
      return str;
    }
  
    const hasil = []; // ini untuk penampung arraynya 
    const group = {}; // ini object penampung
    for(let i = 0; i < strs.length; i++) { // melakukan perulangan untuk
      const sorted = selectionSort([...strs[i]]); //panggil funsi yang sebuah dibuat dengan parameter str [i] yang menguunakan operator spread
      // console.log(sorted);
      const sortedStr = sorted.join('');// dijoinkan agar menyatuu dari karatek yang sudah dipanggil dari function
      // console.log(sortedStr);
  
      if(group[sortedStr] == undefined) { // dicheck menggunakna object yagn dibuat dengah hasil keynya dari join, apabila undifined untuk grup yang sudah dijoin akan diuabhke length hasil kemudian hasil dari pemilihan angka array yang sudah diambil object di ganti dengan nilai array str
        group[sortedStr] = hasil.length;
        hasil[group[sortedStr]] = [strs[i]];
      } else { // jika tidak undifined masuk ke bawah ini yang isniya untuk salah satu object pada array/ atau array yang nilai penentu object akan dipush, jadi dalalam satu array akan ada perurutan untuk awal danakhir
        hasil[group[sortedStr]].push(strs[i]);
      }
    }
  
    return hasil; // return hasil
  }
  
  // Test Case 1
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // Test Case 2
  console.log(groupAnagrams([""]));
  // Output: [[""]]
  
  // Test Case 3
  console.log(groupAnagrams(["a"]));
  // Output: [["a"]]
  
  // Test Case 4
  console.log(groupAnagrams(["listen", "silent", "hello", "world"]));
  // Output: [["listen","silent"],["hello"],["world"]]
  
  // Test Case 5
  console.log(groupAnagrams(["rat", "tar", "art", "car"]));
  // Output: [["rat","tar","art"],["car"]]
  
  // Test Case 6
  console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]));
  // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // Test Case 7
  console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]));
  // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]