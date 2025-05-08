const selectionSort = (strs) => {
  const n = strs.length;
  const groupAnagrams = {};

  for (let i = 0; i < n; i++) {
    let splittedWord = strs[i].split('').sort().join('');
    let minIndex = i;
    for (let j = i + 1; j < splittedWord.length; j++) {
      if (splittedWord[j] < splittedWord[minIndex]) {
        minIndex = j;
      }
    }

    let temp = splittedWord[i];
    splittedWord[i] = splittedWord[minIndex];
    splittedWord[minIndex] = temp;

    if (groupAnagrams[splittedWord] === undefined) {
      groupAnagrams[splittedWord] = [strs[i]];
    } else {
      groupAnagrams[splittedWord].push(strs[i]);
    }
  }
  const result = Object.values(groupAnagrams);
  return result;
};

module.exports = selectionSort;
