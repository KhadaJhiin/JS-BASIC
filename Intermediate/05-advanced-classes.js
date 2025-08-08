// -------------------------------------------------------------------------------CLASSES

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    greet() {
        console.log(`Hello, I'm ${this.name}`);
    };
}

const person = new Person("Jose", 30);
person.greet();

person.sayAge = function () {
    console.log(`I'm ${this.age} years`);
}
person.sayAge();

// ------------------------------------------------------ABSTRACTION

class Animal {
    constructor(name){
        if(new.target === Animal){
            throw new Error(`An abstract class cannot be instantiated`);
        };
        this.name = name;
    };
    makeSound(){
        throw new Error(`This method have to be implemented by the subclass`);
    }
};

// Error

// const animal = new Animal("Mati");
// console.log(animal);

// ------------------------------------------------------POLYMORPHISM

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }
}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }
}

const cat = new Cat("JoseCat")
console.log(cat)
cat.makeSound()

const dog = new Dog("JoseDog")
console.log(dog)
dog.makeSound()

// ------------------------------------------------------MIXINS

const FlyMixin = {
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal { }

class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixin)
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("MoureBird")

console.log(bird.name)
bird.fly()

const dragon = new Dragon("MoureDragon")

console.log(dragon.name)
dragon.fly()

// ------------------------------------------------------PATRON SINGLETON

class Session {

    constructor(name) {
        if (Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this
    }
}

const session1 = new Session("Brais Moure")
const session2 = new Session()
console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

const session3 = new Session("MoureDev")
console.log(session3.name)
console.log(session2 === session3)

// --------------------------------------------------------SYMBOL

const ID = Symbol("id")

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }

    getId() {
        return this[ID]
    }
}

const user = new User("Brais")
console.log(user.name)
console.log(user.ID)
console.log(user.getId())

// --------------------------------------------------------instanceof

class Car { }

const car = new Car()

console.log(car instanceof Car)

// --------------------------------------------------------create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)

// --------------------------------------------------------Proxy

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)
console.log(account.balance)

account.balance = 50
console.log(account.balance)