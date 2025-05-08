import {test, expect, beforeEach, afterEach} from '@jest/globals'
import {shortestPathDijkstraArray, dijkstra} from '../src/dijkstra'

test("Dijkstra", function () {

// Testcase 1
    expect(shortestPathDijkstraArray(
        [
            [-1, 3, -1, -1, -1],
            [3, -1, 1, 1, -1],
            [-1, 1, -1, -1, -1],
            [-1, 1, -1, -1, 2],
            [-1, -1, -1, 2, -1]
        ],
        0,
        2
    )).toStrictEqual(4); // Expected Output: 4

// Testcase 2
    expect(shortestPathDijkstraArray(
        [
            [-1, 3, -1, -1, -1],
            [3, -1, 1, 1, -1],
            [-1, 1, -1, -1, -1],
            [-1, 1, -1, -1, 2],
            [-1, -1, -1, 2, -1]
        ],
        0,
        4
    )).toStrictEqual(6); // Expected Output: 6

// Testcase 3
    expect(shortestPathDijkstraArray(
        [
            [-1, 3, -1, -1, -1],
            [3, -1, 1, 1, -1],
            [-1, 1, -1, -1, -1],
            [-1, 1, -1, -1, 2],
            [-1, -1, -1, 2, -1]
        ],
        1,
        3
    )).toStrictEqual(1); // Expected Output: 1

// Testcase 4
    expect(shortestPathDijkstraArray(
        [
            [-1, 2, -1, -1, -1],
            [2, -1, 1, -1, 3],
            [-1, 1, -1, 4, -1],
            [-1, -1, 4, -1, 2],
            [-1, 3, -1, 2, -1]
        ],
        0,
        4
    )).toStrictEqual(5); // Expected Output: 5

// Testcase 5
    expect(shortestPathDijkstraArray(
        [
            [-1, 1, 2, -1],
            [1, -1, -1, 3],
            [2, -1, -1, -1],
            [-1, 3, -1, -1]
        ],
        0,
        3
    )).toStrictEqual(4); // Expected Output: 4

});