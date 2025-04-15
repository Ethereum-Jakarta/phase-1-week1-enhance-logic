function insertionSort(input, returnAsString) {
  let n = input.length;
  for (let i = 1; i < n; i++) {
    let current = input[i];
    let j = i - 1;
    while (j >= 0 && input[j] > current) {
      input[j + 1] = input[j];
      j--;
    }
    input[j + 1] = current;
  }

  return returnAsString ? input.join("") : input;
}

export default insertionSort;
