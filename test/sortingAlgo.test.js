import {test, expect, beforeEach, afterEach} from '@jest/globals'
import groupAnagrams from '../src/sortingAlgo'

test('Algo Search', () => {

    // Test Case 1
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    // res = ([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);

    // Test Case 2
    expect(groupAnagrams([""]))
    // res = ([[""]]);

    // Test Case 3
    expect(groupAnagrams(["a"]))
    // res = ([["a"]]);

    // Test Case 4
    expect(groupAnagrams(["listen", "silent", "hello", "world"]))
    // res = ([["listen", "silent"], ["hello"], ["world"]]);

    // Test Case 5
    expect(groupAnagrams(["rat", "tar", "art", "car"]))
    // res = ([["rat", "tar", "art"], ["car"]]);

    // Test Case 6
    expect(groupAnagrams(["apple", "banana", "leapp", "grape", "orange"]))
    // res = ([["apple", "leapp"], ["banana"], ["grape"], ["orange"]]);

    // Test Case 7
    expect(groupAnagrams(["abcd", "dcba", "xyz", "zyx", "wxyz"]))
    // res = ([["abcd", "dcba"], ["xyz", "zyx"], ["wxyz"]]);

})

