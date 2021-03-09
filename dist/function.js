function getUser(name, id) {
    return name + id;
}
let IdGenerator;
IdGenerator = getUser;
function getUserDetail(name, age) {
    return name + age;
}
getUserDetail('stone');
function getUserById(name, id = 1) {
    return name + id;
}
getUserById('pony');
function push(arr, ...items) {
    arr.concat(items);
}
function foo(a) {
    if (typeof a === 'string') {
        return a.toString();
    }
    return a;
}
