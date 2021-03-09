class People {
    constructor(age) {
        this._age = age;
    }
    static getCname() {
        return People.cname;
    }
    getAge() {
        return this._age;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
}
People.cname = 'stone';
let stone = new People(18);
stone.age = 25;
class Human extends People {
    constructor() {
        super(0);
    }
    sayHello() {
        console.log('hello');
    }
    getAge() {
        return super.getAge();
    }
}
const women = new Human();
women.sayHello();
women.getAge();
class Animal {
    constructor(name) { }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.power = 'jump';
    }
    say(message) {
        console.log(message);
    }
}
