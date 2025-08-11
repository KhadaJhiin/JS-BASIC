// 1. Add a function to the prototipe of an object
// 2. Create an object that inherits of another
// 4. Uses get and set in an object

let device = {
    type : "Electronic",
    brand : "Sansung",
    price : 1000,
    get info(){
        return `${this.type} - ${this.brand} - ${this.price}`;
    }
}

device.getBrand = function(){
    return this.brand;
};

let cellPhone = Object.create(device);
console.log(cellPhone.getBrand());
console.log(device.info);


// 3. Define a method of instance in an object

function Computer (brand, price){
    this.brand = brand;
    this.price = price;
};

Computer.prototype.getPrice = function(){
    console.log(`This device is ${this.price}`);
};

let laptopOne = new Computer("Lenovo", 2000);
laptopOne.getPrice();

// 5. Use the assign operation in an object

let landAnimals = {
    habit : "Selva",
    legs : 8,
};

let aquaticAnimals = {
    habit : "Ocean",
    fins : 2,
};

let entireAnimals = Object.assign(landAnimals,aquaticAnimals);
console.log(entireAnimals);

// 6. Create an abstract classe

class Employed {
    constructor(name , salary) {
        if(new.target === Employed){
            throw new Error(`An abstract class cannot be instantiaed`);
        };
        this.name = name;
        this.salary = salary;
    };
};

// 7. Use polimorfism in two different classes

class ParTimeEmployed extends Employed {
    constructor(name, salary, workHours){
        super(name, salary);
        this.workHours = workHours;
    };

    generatedMoney(){
        return this.workHours * this.salary;
    };
};

let firstEmployed = new ParTimeEmployed("Jose",1000,5);
console.log(firstEmployed.generatedMoney());

class FullTimeEmployed extends Employed {
    constructor(name,salary) {
        super(name,salary);
    };

    generatedMoney(){
        return this.salary;
    };
};

let employed = new FullTimeEmployed("Leo",15000);
console.log(employed.generatedMoney());

// 8. Implements a Mixin

let dayOff = {
    getDayOff(){
        console.log(`Hi ${this.name} you have just 1 day per week`);
    }
}

Object.assign(FullTimeEmployed.prototype, dayOff);
Object.assign(ParTimeEmployed.prototype, dayOff);

firstEmployed.getDayOff();
employed.getDayOff();

// 9. Create a singleton

class MainCharacter {
    constructor(name){
        if(MainCharacter.instance){
            return MainCharacter.instance;
        }
        this.name = name;
        MainCharacter.instance = this;
    };
};

// 10. Develop a proxy

const autenticationProxy = {
    set(target, property, value){
        if((property === "passWord" && value === " ") || (property ==="userName" && value === " ")){
            throw new Error("There can be no blank spaces");
        };
        target[property] = value;
    }
};

class Acount {
    constructor(userName, passWord){
        this.userName = userName;
        this.passWord = passWord;
    };
};

let FirstUser = new Proxy(new Acount("Jose","1234"),autenticationProxy);
FirstUser.userName = " ";
console.log(FirstUser.userName);
console.log(FirstUser.passWord);




