// -----------------------------------------------------Classes

// The classes are somewhat similar to templates

// -----------------------------------------------------Sintax

class Person {
    constructor(name, age, alias) {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let person = new Person("Miguel", 30, "Chepe");

console.log(typeof (person));
console.log(person);

// -----------------------------------------------------Default values

class Aliens {
    constructor(name = "Without name", age = 0, alias = "Without alias") {
        this.name = name;
        this.age = age;
        this.alias = alias;
    }
}

let alienOne = new Aliens();
console.log(alienOne);

// -----------------------------------------------------Access to properties

console.log(alienOne.name);
console.log(alienOne["name"]);

alienOne.name = "Gray";
console.log(alienOne.name);

// -----------------------------------------------------Methods

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log(`The animal called ${this.name} walks`);
    }
}

let animalOne = new Animals("Roco", 8);
animalOne.walk();

// -----------------------------------------------------Properties encapsulation

// Private

class privatePerson {
    #name;
    #age;
    #alias;
    #bank;

    constructor(name, age, alias, bank) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    }

    get name() {
        return this.#name
    }
    get bank() {
        return this.#bank;
    }
    set bank(newBank) {
        this.#bank = newBank;
    }
}

let banckPerson = new privatePerson("Jose", 30, "Chepe", "IBAN125456");

banckPerson.bank = "New IBAN12354";

console.log(banckPerson.name);
console.log(banckPerson.bank);

// -----------------------------------------------------Inheritance

class Animales {
    constructor(name) {
        this.name = name;
    }
    sound() {
        console.log(`The animal called ${this.name} emits a sound`);
    }
}

class Perros extends Animales {

    constructor(name, age) {
        super(name);
        this.age = age;
    }

    run() {
        console.log(`The dog ${this.age} old runs`)
    }

    sound() {
        console.log(`The dog barks`);
    }
}

let myDog = new Perros("Sasha", 8);

myDog.run();
myDog.sound();

// -----------------------------------------------------Static methods
// We don't need to create an instance of this type of classes ot methods

class MathOperations {

    static sum(a, b) {

        return a + b;
    }
}

console.log(MathOperations.sum(5, 10));



