function identity<T, U>(value: T, message: U): T {
  return value
}

identity('stone', 1)

// 泛型接口
interface Language<T> {
  (arg: T): T
}

// 泛型类
class LanguageDetail<T> {
  name: T
  add: (x: T, y: T) => T
}

let myLanguage = new LanguageDetail<number>()
myLanguage.name = 1
myLanguage.add = (x, y) => {
  return x + y
}

// keyOf
interface G {
  name: string
  age: number
}

type k1 = keyof G

interface StringArray {
  [index: string]: string
}

type S1 = 'a' | 'b' | 'c'

type Obj = {
  [p in S1]: any
}

let obj: Obj = { a: 1, b: 2, c: 3 }

// extends
interface Length {
  length: number
}

// 泛型添加了约束，不再适用所有类型
function getLength<T extends Length>(arg: T): number {
  return arg.length
}

getLength({ length: 10 })

// Partial 偏类型定义
type MyPartial<T> = {
  [p in keyof T]?: T[p]
}

let mp: MyPartial<Length> = {}
