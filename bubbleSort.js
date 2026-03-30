const bubbleSort = (strs) => {
  const n = strs.length;
  const groupOfAnagrams = {};
  for (let i = 0; i < n; i++) {
    let splittedWord = strs[i].split('').sort();
    for (let j = 0; j < splittedWord.length - i - 1; j++) {
      if (splittedWord[j] > splittedWord[j + 1]) {
        const temp = splittedWord[j];
        splittedWord[j] = splittedWord[j + 1];
        splittedWord[j + 1] = temp;
      }
    }
    splittedWord = splittedWord.join('');
    if (groupOfAnagrams[splittedWord] === undefined) {
      groupOfAnagrams[splittedWord] = [strs[i]];
    } else {
      groupOfAnagrams[splittedWord].push(strs[i]);
    }
  }

  const result = Object.values(groupOfAnagrams);
  return result;
};

module.exports = bubbleSort;
