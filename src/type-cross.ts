// 同名基础数据类型的合并
interface X {
  c: string
  d: string
}

interface Y {
  c: string
  e: string
}

type XY = X & Y
type YX = Y & X

// string & number, 不可能存在一个值既是字符串又是数字，所以就变成了 never
let value1: XY = { c: 'name', d: 'task', e: 'event' }

// 同名非基础数据类型的合并，ok
interface D {
  d: string
}

interface E {
  e: number
}

interface A {
  x: D
}

interface B {
  x: E
}

type AB = A & B

let ab: AB = {
  x: {
    d: 'stone',
    e: 1,
  },
}
