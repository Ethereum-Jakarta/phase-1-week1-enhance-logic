export const mergeSort = (str) => {
    if (str.length <= 1) {
        return str;
    }
    const middle = Math.floor(str.length / 2);
    const left = str.slice(0, middle);
    const right = str.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight)
}

const merge = (left, right) => {
  let result = []
  let leftIndex = 0
  let rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex++]);
    } else {
        result.push(right[rightIndex++]);
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}