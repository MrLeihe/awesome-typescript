function Greeter(message: string) {
  return function (target: Function): void {
    target.prototype.hello = function (): void {
      console.log(message)
    }
  }
}

// 类装饰器
@Greeter('fuck you')
class Greeting {}

const greet = new Greeting()
;(greet as any).hello()

// 属性装饰器
declare type MyPropertyDecorator = (
  target: object,
  property: string | symbol
) => void

function logProperty(target: any, key: string) {
  // 删除属性
  delete target[key]

  // 私有属性
  const field = `_${key}`

  Object.defineProperty(target, field, {
    writable: true,
    enumerable: true,
    configurable: true,
  })

  const getter = function (this: any): string {
    const value = this[field]
    console.log('getter:', value)
    return value
  }

  const setter = function (this: any, val: string) {
    this[field] = val
    console.log('setter:', val)
  }

  Object.defineProperty(target, key, {
    set: setter,
    get: getter,
    enumerable: true,
    configurable: true,
  })
}

class Person {
  @logProperty
  public name: string

  constructor(name: string) {
    this.name = name
  }
}

const nuo = new Person('nuo')
nuo.name = 'nuoyi'

// 方法装饰器

// 参数装饰器
