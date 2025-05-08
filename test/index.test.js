import {test, expect, beforeEach, afterEach} from '@jest/globals'
import fun from '../src/index'

test("Index Test", () => {
    expect(fun()).toStrictEqual("index.js")
})