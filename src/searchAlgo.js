import BinarySearch from "./search_algorithm/BinarySearch";
import JumpSearch from "./search_algorithm/JumpSearch";
import SequentialSearch from "./search_algorithm/SequentialSearch";

const searchRotatedArray = (arr, target) => {

    function getMiddlePtr(lPtr, rPtr) {
        return Math.floor((lPtr + rPtr) / 2)
    }

    //Setup LR pointer and Length
    const n = arr.length;
    let lPtr = 0,
        rPtr = n - 1;

    //di Lptr <= Rptr
    while (lPtr <= rPtr) {

        //getMiddlePtr, floor
        const mPtr = getMiddlePtr(lPtr, rPtr)

        //OneShoot
        if (arr[mPtr] === target) return mPtr;

        //Lptr <= Mptr
        if (arr[lPtr] <= arr[mPtr]) {

            // Lptr <= target && Mptr < target
            if (arr[lPtr] <= target && target < arr[mPtr]) {
                rPtr = mPtr - 1;
            } else {
                lPtr = mPtr + 1;
            }
        }

        // Lptr > Mptr
        else {
            // Mptr < target && traget <= rPtr
            if (arr[mPtr] < target && target <= arr[rPtr]) {
                lPtr = mPtr + 1;
            } else {
                rPtr = mPtr - 1;
            }
        }
    }

    return -1;
};

export default searchRotatedArray
