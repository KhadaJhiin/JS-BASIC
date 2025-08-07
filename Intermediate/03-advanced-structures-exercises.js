// 1. Use a map, filter and reduce to create a different example than the previous lesson

const names = ["Jose","Jacke","Jerald","Leo","Natha"];
let numbers =[1,2,3,4,5,6,8,9,34,7,60,23,45,2,34,56];

// MAP
let greets = names.map(element => `Hello ${element} you're welcome !`);
console.log(greets);

// FILTER
let jInital = names.filter(element => element[0] === "J");
console.log(jInital);

// REDUCE
let fruits = ["apple","apple","orange","apple","lemon","banana","lemon"];

let countFruits = fruits.reduce((accumulator, currentElement) => {
    accumulator[currentElement] = (accumulator[currentElement] || 0) + 1;
    return accumulator;
},{});

console.log(countFruits);

// 2. Given an array of numbers, create a new array, with that numbers elevated to cube and filter only the even numbers

const filterMap = (numbers.map((element)=>element**3)).filter(element => element%2===0);
console.log(filterMap);

// 3. Use flat y flatMap to create an different example than the one given in the before lesson

// FLAT
const datos = [1, [2, 3], [4, [5, 6]], 7];
let planeArray = datos.flat(2);
console.log(planeArray);

// FLAT MAP
const products = [
    { name: "Camiseta", color: ["rojo", "azul"] },
    { name: "Pantalón", color: ["negro"] },
    { name: "Zapatos", color: ["blanco", "gris"] }
];

console.log("--------------------------------- 3");

let matchColor = products.flatMap(element => {
    return element.color.map(value => `${element.name} - ${value}`);
});
console.log(matchColor);

// 4. Sort an array of numbers from major to minor

let sortArray = (numbers.sort((a,b) => a-b)).reverse();
console.log(sortArray);

// 5. Given two sets, find the union, intersection and the diference between them.

let setOne = new Set([1,2,3,4,5,6,7,10,11,12,13,20,21,30,40,50,50,50]);
let setTwo = new Set([3,4,5,6,7,10,50,12,60,20,21,70,40,50]);

console.log("Union");
let unionSets = [...new Set([...setOne, ...setTwo])];
console.log(unionSets);

console.log("Interception");
let intersectionSets = [...setOne].filter(element => [...setTwo].includes(element));
console.log(intersectionSets);

console.log("Difference");
let differenceSets = [...setOne].filter(element => ![...setTwo].includes(element));
console.log(differenceSets);

// 6. Iterate the results belong to the before exercise

unionSets.forEach(element => console.log(element));

// 7. Create a map that stores user information (name, age and email) and iterate the data

let userInformation = new Map([
    ["Jose" , {age:30, email : "joselo@gmail.com"}],
    ["Jeral" , {age:19, email : "UWU@gmail.com"}],
    ["Jacke" , {age:50, email : "jacki@gmail.com"}],
    ["Leo" , {age:18, email : "leo@gmail.com"}],
    ["Ricardo" , {age:15, email : "Ricks@gmail.com"}],
    ["Gerardo" , {age:12, email : "Gerard@gmail.com"}],
]);

userInformation.forEach((value,key)=>console.log(`${key}: ${value.age}, ${value.email}`));

// 8. Given the one previous map, create an array with the names

let nameArray = Array.from(userInformation.keys());
console.log(nameArray);

// 9. Given the previous map, obtein an array with the users emails with majority age and tranforn it into a set.

let emailMajor = [...new Set(
    Array.from(userInformation.values()) 
    .filter(user => user.age >= 18)    
    .map(user => user.email)         
)];

console.log(emailMajor);

// 10. Transform the map in an object, then, transform the object in a map but its new
//     key will be the email of the user, and its values will be the rest of data

const objectFromMap = Object.fromEntries(userInformation);

const newMap = new Map();

console.log(objectFromMap);

console.log(Object.entries(objectFromMap));

for(let[name,data] of Object.entries(objectFromMap)){
    const {email, ...rest} = data;
    rest.name = name;
    newMap.set(email, rest);
}

console.log(newMap);

