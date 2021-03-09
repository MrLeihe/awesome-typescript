Object.create(null)

interface SquareConfig {
  readonly width: number
  readonly height: number
}

function calcArea(config: SquareConfig): number {
  return config.width * config.height
}

let config: SquareConfig = { width: 10, height: 9 }
let area = calcArea(config)
console.log(area)

function error(): Object {
  throw new Error('type error')
}
