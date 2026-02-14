export const bubbleSort = (str) => {
    for(let i = 0; i < str.length - 1; i++) {
        for(let j = 0; j < str.length - i - 1; j++) {
            if(str[j] < str[j + 1]) {
                let temp = str[j]
                str[j] = str[j + 1]
                str[j + 1] = temp
            }
        }
    }
    return str
}