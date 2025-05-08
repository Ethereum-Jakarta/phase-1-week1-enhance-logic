const groupAnagrams = function (strs) {
  let outer = [];
  let inner;
  let current;
  let Dictionarry = {};

  if (strs.length == 0) {
    return [];
  }
  for (let i = 0; i < strs.length; i++) {
    inner = [];
    inner.push(strs[i]);
    current = arrToString(bubleSort(strs[i].split("")));

    if (Dictionarry[current] == null) {
      for (let j = 0; j < strs.length; j++) {
        if (strs[i] != strs[j]) {
          if (current == arrToString(bubleSort(strs[j].split("")))) {
            inner.push(strs[j]);
          }
        }
      }
      outer.push(inner);
      Dictionarry[current] = current;
    }
  }

  return outer;
};

function bubleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tukar arr[j] dan arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function arrToString(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result = `${result}${arr[i]}`;
  }
  return result;
}

// Test Case 2
console.log(groupAnagrams([""]));
// Output: [[""]]
