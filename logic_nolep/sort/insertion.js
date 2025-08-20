const insertionSort = (arr) => {
  const arrSort = [...arr];
  let n = arrSort.length;

  for (let i = 1; i < n; i++) {
    let current = arrSort[i];
    let j = i - 1;

    while (j >= 0 && arrSort[j] > current) {
      arrSort[j + 1] = arrSort[j];
      j--;
    }

    arrSort[j + 1] = current;
  }
  return arrSort;
};

module.exports = insertionSort;
