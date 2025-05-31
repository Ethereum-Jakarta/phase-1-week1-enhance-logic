// Selection Sort
function selectionSort(arr) {
  let a = arr.slice();
  for (let i = 0; i < a.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIdx]) minIdx = j;
    }
    if (minIdx !== i) {
      let temp = a[i];
      a[i] = a[minIdx];
      a[minIdx] = temp;
    }
  }
  return a;
}

module.exports = selectionSort;
