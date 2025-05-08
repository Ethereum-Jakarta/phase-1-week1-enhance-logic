function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(array) {
  // len array
  let lengthArray = array.length;
  // if length is 1, just return the array
  if (lengthArray === 1) {
    return array;
  }

  // bagi 2, left and right array
  let middle = Math.floor(lengthArray / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// test case

const arrayTest1 = [64, 34, 25, 12, 22, 11, 90];
const arrayTest2 = [64, 25, 12, 22, 11];
const arrayTest3 = [12, 11, 13, 5, 6];
const arrayTest4 = [12, 11, 13, 5, 6, 7];

console.log(mergeSort(arrayTest1));
console.log(mergeSort(arrayTest2));
console.log(mergeSort(arrayTest3));
console.log(mergeSort(arrayTest4));

console.log(mergeSort([4, 5, 6, 7, 0, 1, 2]));
console.log(mergeSort([4, 5, 6, 7, 0, 1, 2]));
console.log(mergeSort([1]));
console.log(mergeSort([6, 7, 0, 1, 2, 4, 5]));
console.log(mergeSort([4, 5, 6, 7, 8, 1, 2, 3]));
console.log(mergeSort([3, 4, 5, 6, 7, 8, 1, 2]));
console.log(mergeSort([5, 6, 7, 8, 1, 2, 3, 4]));
console.log(mergeSort([2, 3, 4, 5, 6, 7, 8, 1]));
console.log(mergeSort([3, 1]));
console.log(mergeSort([5, 1, 3]));
