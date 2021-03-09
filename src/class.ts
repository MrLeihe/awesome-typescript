class People {
  // 静态属性
  static cname: string = 'stone'

  // 私有成员属性
  private _age: number

  // 构造函数
  constructor(age: number) {
    this._age = age
  }

  // 静态方法
  static getCname(): string {
    return People.cname
  }

  // 成员方法
  getAge(): number {
    return this._age
  }

  // 访问器
  get age(): number {
    return this._age
  }

  set age(age: number) {
    this._age = age
  }
}

// 实例化
let stone = new People(18)

stone.age = 25

// 继承

class Human extends People {
  constructor() {
    super(0)
  }

  sayHello() {
    console.log('hello')
  }

  getAge(): number {
    return super.getAge()
  }
}

const women = new Human()
women.sayHello()
women.getAge()

// 抽象类
abstract class Animal {
  constructor(name: string) {}

  abstract say(message: string): void

  abstract power: string
}

class Dog extends Animal {
  say(message: string): void {
    console.log(message)
  }

  power: string = 'jump'
}
