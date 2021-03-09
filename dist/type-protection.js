function printEmployeeInformation(emp) {
    if ('powers' in emp) {
        console.log('admin');
    }
    if ('work' in emp) {
        console.log('employee');
    }
}
function isString(x) {
    return typeof x === 'string';
}
