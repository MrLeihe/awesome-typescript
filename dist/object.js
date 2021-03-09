Object.create(null);
function calcArea(config) {
    return config.width * config.height;
}
let config = { width: 10, height: 9 };
let area = calcArea(config);
console.log(area);
function error() {
    throw new Error('type error');
}
