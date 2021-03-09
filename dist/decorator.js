var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Greeter(message) {
    return function (target) {
        target.prototype.hello = function () {
            console.log(message);
        };
    };
}
let Greeting = class Greeting {
};
Greeting = __decorate([
    Greeter('fuck you')
], Greeting);
const greet = new Greeting();
greet.hello();
function logProperty(target, key) {
    delete target[key];
    const field = `_${key}`;
    Object.defineProperty(target, field, {
        writable: true,
        enumerable: true,
        configurable: true,
    });
    const getter = function () {
        const value = this[field];
        console.log('getter:', value);
        return value;
    };
    const setter = function (val) {
        this[field] = val;
        console.log('setter:', val);
    };
    Object.defineProperty(target, key, {
        set: setter,
        get: getter,
        enumerable: true,
        configurable: true,
    });
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    logProperty
], Person.prototype, "name", void 0);
const nuo = new Person('nuo');
nuo.name = 'nuoyi';
