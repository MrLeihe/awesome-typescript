let someValue: any
someValue = 'stone'

// 尖括号语法
let len: number = (<string>someValue).length

// as 语法
let len2: number = (someValue as string).length

function func(name: null) {
  const firstName: string = name
  const ignoreUndefindAndNull: string = name!
}
func(null)
