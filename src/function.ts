// 参数类型和返回类型
function getUser(name: string, id: number): string {
  return name + id
}

// 函数类型
let IdGenerator: (chars: string, nums: number) => string

IdGenerator = getUser

// 可选参数,可选参数符号 ？
function getUserDetail(name: string, age?: number) {
  return name + age
}

getUserDetail('stone')

// 默认参数
function getUserById(name: string, id: number = 1) {
  return name + id
}

getUserById('pony')

// 剩余参数
function push(arr: Array<string | number>, ...items: string[]) {
  arr.concat(items)
}

// 函数重载

type Combinable = string | number

function foo(width: number): number

function foo(width: string): string

function foo(a: Combinable) {
  if (typeof a === 'string') {
    return a.toString()
  }

  return a
}
