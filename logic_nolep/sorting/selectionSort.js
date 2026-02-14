export const selectionSort = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
        let minIndex = i;

        for(let j = i + 1; j < str.length; j++) {
            if(str[j] < str[minIndex]) {
                minIndex = j
            }
        }

        let temp = str[i]
        str[i] = str[minIndex]
        str[minIndex] = temp
    }
    return str
}