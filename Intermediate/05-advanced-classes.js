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
