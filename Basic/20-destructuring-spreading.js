// --------------------------------------------------Destructuring

let myArray = [1, 2, 3, 4];

// let [myValue1, myValue2] = myArray;
// console.log(myValue1);
// console.log(myValue2);

let [myValue1, myValue2, myValue3, myValue4, myValue5] = myArray;
console.log(myValue1);
console.log(myValue2);
console.log(myValue3);
console.log(myValue4);
console.log(myValue5);

// --------------------------------------------------Destructuring whit default values

let [myValue6 = 0, myValue7 = 1, myValue8 = 2, myValue9 = 3, myValue10 = 4, myValue11 = 5] = myArray;

console.log(myValue6);
console.log(myValue7);
console.log(myValue8);
console.log(myValue9);
console.log(myValue10);
console.log(myValue11);

// --------------------------------------------------Ignore elements and arrays

let [myValue12, , , myValue13] = myArray;

console.log(myValue12);
console.log(myValue13);

// --------------------------------------------------Destructure of objects

// If we want to destructure an object we have to put its names or keys
// as in the original object, if I put for example, age2 instead age, it doesn't work
// the response will be "Undefined"

let person = {
    named: "Jose",
    age: 30,
    alias: "Chepe"
}

let { named, age, alias } = person;

console.log(named);
console.log(age);
console.log(alias);

// --------------------------------------------------Sintaxs in objects with new names

let { alias: alias1, named: name1, age: age1 } = person;

console.log(alias1);
console.log(name1);
console.log(age1);

// --------------------------------------------------Destructuring whit nested objects

let persons = {
    name: "Jose",
    lastName: "Ortega",
    job: {
        name: "Programer",
        time: 8,
        pay: 500,
    }
}

let { name: namePerson, job: { name: nameJob } } = persons;

console.log(namePerson);
console.log(nameJob);

// --------------------------------------------------Spreading (...)

// --------------------------------------------------Array sintax (...)

let myArray2 = [...myArray]; 

// This first form is similar to a copy

let myArray3 = [...myArray, 5, 6];

// Whit this second form you can create a copy of the first array and add other numbers
// or anything you want 


// --------------------------------------------------Array combination (...)

let myArray4 = [...myArray2, ...myArray3];

// --------------------------------------------------Object sintax (...)

let person4 = {...persons }

let person5 = {...persons, girlfriend : "Jeraldine"};

console.log(person5);


