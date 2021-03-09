'use strict'
// 布尔
let isDone: boolean = false

// 数字
let num: number = 1

// 字符串
let str: string = 'stone'

// 数组
// 数组泛型
let strs: Array<string> = ['bob', 'tony']

// 元组
let compose: [number, string] = [1, '']

compose[0] = 0

enum Status {
  A,
  SUCCESS = 'yes',
  FAIL = 'no',
  COMPLETE = 8,
  FUCK,
}

let value: unknown = 1

let value2: unknown = value

function getName(): void {}

let a: void = null
