const groupAnagrams = function(strs) {
    // Implementasi akan datang di sini

    //1. BUBBLE SORT


  // let result = {}
  // for(let i = 0; i < strs.length; i++){
  //   let arr = strs[i].split("")
  //   for(let j = 0 ; j < arr.length; j++){
  //     for(let k = 0 ; k < arr.length - 1 - j; k++){
  //       if(arr[k] > arr[k+1]){
  //         let temp = arr[k]
  //         arr[k] = arr[k+1]
  //         arr[k+1] = temp
  //       }
  //     }
  //   }
  //   let sorted = arr.join("")
  //   if(result[sorted]){
  //     result[sorted].push(strs[i])
  //   }else{
  //     result[sorted] = [strs[i]]
  //   }
  // }

  //console.log('BUBBLE SORT: ')
  // return Object.values(result)



  //2.SELECTION SORT

  // let result = {}

  // for(let i = 0 ; i < strs.length ; i++){
  //   let arr = strs[i].split("")
  //   for(let j = 0 ; j < arr.length; j++){
  //     let minIndex = j
  //     for(let k = j+1 ; k < arr.length; k++){
  //       if(arr[k] < arr[minIndex]){
  //         minIndex = k
  //       }
  //     }
  //     let temp = arr[j]
  //     arr[j] = arr[j+1]
  //     arr[minIndex] = temp
  //   }
  //   let sorted = arr.join("")
  //   if(result[sorted]){
  //     result[sorted].push(strs[i])
  //   }else{
  //     result[sorted] = [strs[i]]
  //   }
  // }

  //console.log('SELECTION SORT: ')
  // return Object.values(result)
   
  //3.INSERTION SORT

  let result = {}

  for(let i = 0; i < strs.length; i++){
    let arr = strs[i].split("")
    for(j = 0 ; j < arr.length; j++){
      let current = arr[j];
      let k = j - 1

      while (k >= 0 && arr[k] > current){
        arr[k+1] = arr[k]
        k--
      }

      arr[k+1] = current
    }
    let sorted = arr.join("")
    if(result[sorted]){
      result[sorted].push(strs[i])
    }else{
      result[sorted] = [strs[i]]
    }
  }

  console.log('INSERTION SORT: ')
  return Object.values(result)


}
  
  // Test Case 1
  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); 
  // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
  
  // // Test Case 2
  // console.log(groupAnagrams([""])); 
  // // Output: [[""]]
  
  // // Test Case 3
  // console.log(groupAnagrams(["a"])); 
  // // Output: [["a"]]
  
  // // Test Case 4
  // console.log(groupAnagrams(["listen", "silent", "hello", "world"])); 
  // // Output: [["listen","silent"],["hello"],["world"]]
  
  // // Test Case 5
  // console.log(groupAnagrams(["rat", "tar", "art", "car"])); 
  // // Output: [["rat","tar","art"],["car"]]
  
  // // Test Case 6
  // console.log(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"])); 
  // // Output: [["apple","leapp"],["banana"],["grape"],["orange"]]
  
  // // Test Case 7
  // console.log(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"])); 
  // // Output: [["abcd","dcba"],["xyz","zyx"],["wxyz"]]