// 1. Use destructuring to extract the first two elements of an array

let myArray = [1, 2, "Jose", "Jerald"];

let [elementOne, elemenTwo] = myArray;

console.log(elementOne, elemenTwo);

// 2. Use destructuring on an array and assign a default value to a variable

let [, , , , elemenThree = "Jacke"] = myArray;

console.log(elemenThree);

// 3. Use destructuring to extract two properties from an object

let person = {
    firstName : "Jose",
    age : 30,
    alias : "Miguelin",
    job : {
        name : "Programer",
        time : 8,
    }
}

let {firstName , age} = person;

console.log(firstName, age);

// 4. Use destructuring to extract two properties of an object and asign them to variables with different names

let {firstName : name1 , age : age1} = person;

console.log(name1, age1);

// 5. Use destructuring to extract two properties from a nested object

let {firstName : name2, job : {name : nameOfJob, time : timeOfJob}} = person;

console.log(name2, nameOfJob, timeOfJob);

// 6. Use spreading to combine two arrays into a new one

let myArray2 = ["dog",9,"cat",2];

let myArray3 = [...myArray, ...myArray2];

console.log(myArray3);

// 7. Use spread to create a copy of an array

let myArray4 = [...myArray3];
console.log(myArray4);

// 8. Use spread to combine two objects into a new one

let animal = {
    name : "Perro",
    breed : "canis"
}

let combineObject = {...person, ...animal};
console.log(combineObject);

// 9. Use spreading to create a copy from an object

let copyObject = {...animal};
console.log(copyObject);

// 10. Combine destruction and spreading

let cars = {
    brand : "Audi",
    countries : ["Colombia", "Brazil", "England"],
}

let newCountries = [...cars.countries, "Peru","Ecuador"];

let [countryOne, countryTwo, countryThree, countryFour, countryFive] = newCountries;

console.log(countryOne,countryTwo,countryThree,countryFour,countryFive);