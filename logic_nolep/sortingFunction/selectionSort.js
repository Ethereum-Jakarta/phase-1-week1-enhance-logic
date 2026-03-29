export function selectionSort(input){
    let n = input.length

    for(let i = 0; i < n - 1; i ++){
        let minIndex = i;
        for(let j = i + 1; j < n; j++){
            if (input[j] < input[minIndex]){
                minIndex = j
            }
        }

        let temp = input[i]
        input[i] = input[minIndex]
        input[minIndex] = temp
    }
    return input
}