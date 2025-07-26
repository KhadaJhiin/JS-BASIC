// 1. Create a class that receives two properties

class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }

    static exist() {
        console.log(`This person doesn't yet exist, because he has no name`);
    }

    getName() {
        console.log(`The name is ${this.name} ${this.lastName}`);
    }
}

let PersonOne = new Person("Miguel", "Ortega");

// 2. Add a method to the class that uses those properties


// 3. Display the values using the method you created earlier

PersonOne.getName();

// 4. Add a static method to your first class

// 5. Use the static method

Person.exist();

// 6. Create a class that uses inheritance

// 7. Create a class that uses getters and setters

// 8. Modifie the class with getters and setters so that the class uses private properties

// 9. Use the gets and sets and display their values.

// 10. Overriding a method of a class that uses inheritance

class Boy extends Person {

    #IdNumber;

    constructor(name, lastName, age, weight, IdNumber) {
        super(name, lastName);
        this.age = age;
        this.weight = weight;
        this.#IdNumber = IdNumber;
    }

    getName(){
        console.log(`The boy name is ${this.name} and he is ${this.age} years old`)
    }

    get IdNumber() {
        return this.#IdNumber;
    }

    set IdNumber(IdNumber) {
        this.#IdNumber = IdNumber;
    }
}

let boyOne = new Boy("Leo", "Gaviria", 8, 25, 123456);

boyOne.IdNumber = 5896;

console.log(boyOne.IdNumber);

boyOne.getName();



