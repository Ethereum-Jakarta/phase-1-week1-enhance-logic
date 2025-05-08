import {test, expect, beforeEach, afterEach} from '@jest/globals'
import {Node, Graph, islandCount, shortestPath} from '../src/graph'
import util from 'util'



test('Shortest Path Count', () => {

// Testcase 1
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'David')).toStrictEqual(2) // Expected Output: 2

    // Testcase 2
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Eve')).toStrictEqual(2) // Expected Output: 2

    // Testcase 3
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'Alice', 'Alice')).toStrictEqual(0) // Expected Output: 0

    // Testcase 4
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'David', 'Charlie')).toStrictEqual(3) // Expected Output: 3

    // Testcase 5
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'Eve', 'Bob')).toStrictEqual(1) // Expected Output: 1

    // Testcase 6
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'Charlie', 'Alice')).toStrictEqual(1) // Expected Output: 1

    // Testcase 7
    expect(shortestPath({
        'Alice': ['Bob', 'Charlie'],
        'Bob': ['Alice', 'David', 'Eve'],
        'Charlie': ['Alice', 'Eve'],
        'David': ['Bob'],
        'Eve': ['Bob', 'Charlie']
    }, 'David', 'Eve')).toStrictEqual(2) // Expected Output: 2
})


test('Island Count', () => {


// Testcase 1
    expect(islandCount([
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ])).toStrictEqual(1) // Expected Output: 1

// Testcase 2
    expect(islandCount([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1]
    ])).toStrictEqual(3) // Expected Output: 3

// Testcase 3
    expect(islandCount([
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [1, 0, 0, 1, 1]
    ])).toStrictEqual(5) // Expected Output: 5

// Testcase 4
    expect(islandCount([
        [1, 0, 0, 0],
        [0, 1, 0, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 1]
    ])).toStrictEqual(4) // Expected Output: 4

// Testcase 5
    expect(islandCount([
        [1, 1, 0, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0]
    ])).toStrictEqual(6) // Expected Output: 6

// Testcase 6
    expect(islandCount([
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0]
    ])).toStrictEqual(2) // Expected Output: 2

// Testcase 7
    expect(islandCount([
        [1, 1, 1],
        [0, 0, 0],
        [1, 0, 1]
    ])).toStrictEqual(3) // Expected Output: 3

});
