interface Admin {
  name: string
  powers: []
}

interface Employee {
  name: string
  work: Function
}

type UnknowEmployee = Admin | Employee

// in 关键字
function printEmployeeInformation(emp: UnknowEmployee) {
  if ('powers' in emp) {
    console.log('admin')
  }
  if ('work' in emp) {
    console.log('employee')
  }
}

function isString(x: any): x is string {
  return typeof x === 'string'
}
