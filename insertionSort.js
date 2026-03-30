const insertionSort = (strs) => {
  const n = strs.length;
  const groupOfAnagrams = {};

  for (let j = 0; j < n; j++) {
    let splittedWord = strs[j].split('').sort().join('');
    let current = splittedWord[j];
    let k = j - 1;

    while (k >= 0 && splittedWord[k] > current) {
      splittedWord[k + 1] = splittedWord[k];
      k--;
    }
    splittedWord[k + 1] = current;
    if (groupOfAnagrams[splittedWord] === undefined) {
      groupOfAnagrams[splittedWord] = [strs[j]];
    } else {
      groupOfAnagrams[splittedWord].push(strs[j]);
    }
  }

  const result = Object.values(groupOfAnagrams);
  return result;
};

module.exports = insertionSort;
