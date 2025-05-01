export function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length/2);
    let low = mergeSort(arr.slice(0, mid));
    let high = mergeSort(arr.slice(mid));

    return merge(low, high);
}

function merge(low, high) {
    let result = [];
    let lowIndex = 0; 
    let highIndex = 0; 

    while (lowIndex < low.length && highIndex < high.length) {
        if (low[lowIndex] <= high[highIndex]) {
            result.push(low[lowIndex]);
            lowIndex++;
        } else {
            result.push(high[highIndex]);
            highIndex++;
        }
    }

    return result.concat(low.slice(lowIndex)).concat(high.slice(highIndex));
}