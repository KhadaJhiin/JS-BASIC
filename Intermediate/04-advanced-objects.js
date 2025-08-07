// ----------------------------------------------------------------OBJECTOS

// ---------------------------------------------PROTPOTYPE

let person = {
    name : "Jose",
    age : 30,
    greet(){
        console.log(`Hello, I'm ${this.name}`);
    },
}

console.log(person.__proto__);
console.log(Object.getPrototypeOf(person));

person.sayAge = function(){
    console.log(`I'm ${this.age} years`);
}

// ---------------------------------------------INHERITANCE

let programer = Object.create(person);
programer.language = "JavaScript";
programer.name = "Leo";
console.log(person.name);
console.log(programer.name);
console.log(programer.language);

// ---------------------------------------------STATIC METHODS AND INSTANCE METHODS

function Person(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.greet = function () {
    console.log(`Hello, I'm ${this.name}`);
};

let newPerson = new Person("Jose", 30);
newPerson.greet();

// -------------------------------------------------------------------------ADVANCED METHODS

// ---------------------------------------------ASSIGN

let person_core = {name : "Jose"};
let person_details = {age : 30 , alias : "Joselo"};

let full_person = Object.assign(person_core, person_details);

console.log(full_person);

// ---------------------------------------------KEYS, VALUES, ENTRIES

console.log(Object.keys(full_person));
console.log(Object.values(full_person));
console.log(Object.entries(full_person));

