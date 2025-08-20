function selectionSort(arr) {
  const arrSort = [...arr];
  let n = arrSort.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arrSort[j] < arrSort[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arrSort[i];
    arrSort[i] = arrSort[minIndex];
    arrSort[minIndex] = temp;
  }

  return arrSort;
}

module.exports = selectionSort;
