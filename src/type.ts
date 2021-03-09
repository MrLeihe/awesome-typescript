// union
type RequestStatus = 1 | 2 | 4 | 8

console.log()

// 定义枚举
enum Transmission {
  speed = 100,
  color = 'red',
}

// 定义三个接口类型
interface Car {
  type: 'car'
  transmission: Transmission
}

interface Truck {
  type: 'truck'
  capacity: number
}

interface Motorcycle {
  type: 'motorcycle'
  make: number
}

// 定义联合类型
type Vehicle = Car | Truck | Motorcycle

function evaluatePrice(vehicle: Vehicle): number {
  switch (vehicle.type) {
    case 'truck':
      return vehicle.capacity * Math.PI
  }
}
const truck: Truck = { type: 'truck', capacity: 180 }
evaluatePrice(truck)
