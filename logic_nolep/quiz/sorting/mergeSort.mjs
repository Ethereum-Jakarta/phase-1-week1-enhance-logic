function mergeSort(arr, returnAsString) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // 1
  const left = arr.slice(0, middle); // eat
  const right = arr.slice(middle); // tea, ate

  const sortedLeft = mergeSort(left, returnAsString);
  const sortedRight = mergeSort(right, returnAsString);

  return merge(sortedLeft, sortedRight, returnAsString);
}

function merge(left, right, returnAsString) {
  let container = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      container.push(left[leftIndex]);
      leftIndex++;
    } else {
      container.push(right[rightIndex]);
      rightIndex++;
    }
  }

  const result = container
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

  return result;
}

export default mergeSort;
