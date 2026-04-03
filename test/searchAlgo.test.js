import {test, expect, beforeEach, afterEach} from '@jest/globals'
import searchRotatedArray from '../src/searchAlgo'


test('Algo Search', () => {


    // Test Case
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(4); // Output: 4
    expect(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)).toStrictEqual(-1); // Output: -1
    expect(searchRotatedArray([1], 0)).toStrictEqual(-1); // Output: -1
    expect(searchRotatedArray([6, 7, 0, 1, 2, 4, 5], 7)).toStrictEqual(1); // Output: 1
    expect(searchRotatedArray([4, 5, 6, 7, 8, 1, 2, 3], 6)).toStrictEqual(2); // Output: 2
    expect(searchRotatedArray([3, 4, 5, 6, 7, 8, 1, 2], 8)).toStrictEqual(5); // Output: 5
    expect(searchRotatedArray([5, 6, 7, 8, 1, 2, 3, 4], 1)).toStrictEqual(4); // Output: 4
    expect(searchRotatedArray([2, 3, 4, 5, 6, 7, 8, 1], 9)).toStrictEqual(-1); // Output: -1
    expect(searchRotatedArray([3, 1], 1)).toStrictEqual(1); // Output: 1
    expect(searchRotatedArray([5, 1, 3], 5)).toStrictEqual(0); // Output: 0

});