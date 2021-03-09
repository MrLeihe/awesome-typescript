// 对象的形状
interface Person {
  name: string
  age: number
}

let child: Person = {
  name: 'stone',
  age: 18,
}

child.name = 'nuoyi'

// 可选，只读属性
interface Fruit {
  readonly name: string
}

let orange: Fruit = {
  name: 'orange',
}

// Cannot assign to 'name' because it is a read-only property
// orange.name = 'apple'

// 任意属性，索引签名，有扩展需求是可以用
interface Work {
  name: string
  money: number
  [propName: string]: any
}

let doctor: Work = {
  name: 'doctor',
  money: 10000,
  cloth: 'wihte',
  age: {},
}

// 接口与类型别名的区别
// 都可以用来描述对象，或函数签名

interface Point {
  x: number
  y: number
}

interface SetPoint {
  (x: number, y: number): void
}

type Point2 = {
  x: number
  y: number
}

type SetPoint2 = {
  (x: number, y: number): void
}

// 实现类型别名
class MyPoint implements Point2 {
  x: number
  y: number
}

type str = string

// 扩展继承 extend
interface School {
  name: string
}

interface University extends School {
  time: number
}

type PrimarySchool = { name: string }

type MiddleSchool = PrimarySchool & { shoping: boolean }

let school: MiddleSchool = {
  name: 'school',
  shoping: true,
}

interface TechSchool extends PrimarySchool {
  hasMoney: boolean
}

let teacher: TechSchool = {
  name: 'teacher',
  hasMoney: false,
}

type BigSchool = TechSchool | { area: number }

let big: BigSchool = {
  name: 'big',
  hasMoney: true,
  area: 100,
}

// implements
// 类不能实现联合类型
// class Student implements BigSchool {
//   name: 'big'
//   hasMoney: true
//   area: 100
// }

// 重复定义与自动合并，declaration merging

// 接口重复定义会合并
interface Test {
  x: number
}

interface Test {
  y: number
}

const tes: Test = { x: 1, y: 1 }

// 类型不能重复定义（标识符“Action”重复。）
// type Action = {look: string}
// type Action = {say: string}
