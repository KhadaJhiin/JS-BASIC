// ----------------------------------------------------------------------------Advanced arrays
// Order superior functions
// This kind of function are called that way because, it received another
// funtion and returns a value or a gruop of values.

// -------------------------------------------------------------FOR EACH

let number =[1,2,3,4,5,6];

number.forEach(element => console.log(element));

// -------------------------------------------------------------MAPS

let doubled = number.map(element => element * 2);
console.log(doubled);

// -------------------------------------------------------------FILTER

let evens = number.filter(element => element % 2 === 0);
console.log(evens);

// -------------------------------------------------------------REDUCE

let sum = number.reduce((accumulator,currentElement) => accumulator + currentElement, 0);
console.log(sum);

// -------------------------------------------------------------------------------Manipulation

// -------------------------------------------------------------FLAT

let nestedArray = [1,[2,[3,[4]]]];

let flatArray = nestedArray.flat(1);
console.log(nestedArray);
let flatArray2 = nestedArray.flat(2);
console.log(flatArray);
console.log(flatArray2);

// -------------------------------------------------------------FLATMAP
// FlatMap is equivalent to do this, .map(...).flat(1)
// It means just flatten one level

let phrases = ["Hello world", "Bye worold"];
let words = phrases.flatMap(phrases => phrases.split(" "));
console.log(words);

// -------------------------------------------------------------ORDENATION

let unsortedWords = ["a","e","u","i","o"];
let sortedWords = unsortedWords.sort();
console.log(sortedWords);
let unsortedNumbers = [3,4,1,5,10,2,6];
let sortedNumbers = unsortedNumbers.sort((a,b) => a-b);
console.log(sortedNumbers);

// -------------------------------------------------------------REVERSE

sortedNumbers.reverse();
console.log(sortedNumbers);

// -------------------------------------------------------------------------------------SEARCH

// -------------------------------------------------------------INCLUDE

console.log(sortedNumbers.includes(4));

// -------------------------------------------------------------FIND

let firstEven = sortedNumbers.find(element => element % 2 === 0);
console.log(firstEven);

// -------------------------------------------------------------FINDINDEX

let firstEvenIndex = sortedNumbers.findIndex(element => element % 2 === 0);
console.log(firstEvenIndex);

// ------------------------------------------------------------------------------ADVANCED SETS

// -------------------------------------------------------------OPERATIONS

const numberArray = [1,2,3,4,5,5,6,7,7,7,8];
const numberSet = [...new Set(numberArray)];
console.log(numberSet);

// -------------------------------------------------------------OPERATION WITH SETS

// -------------------------------------------------------------UNION

let setA = new Set([1,2,3,8]);
let setB = new Set([1,2,3,4,4,5,5,5,6]);
let union = new Set([...setA, ...setB]);
console.log(union);

// -------------------------------------------------------------INTERCEPTION

const interception = new Set([...setA].filter(element => setB.has(element)));
console.log(interception);

// -------------------------------------------------------------DIFERENCE

const difference = new Set([...setA].filter(element => !setB.has(element)));
console.log(difference);

// -------------------------------------------------------------SET CONVERTION

let arrayFromSet = [...setA];
console.log(arrayFromSet);

// -------------------------------------------------------------SET ITERATION FE

setA.forEach(element => console.log(element));

// ---------------------------------------------------------------------------------------MAPS

let myMap = new Map([
    ["name", "Jose"],
    ["age",37]
]);

myMap.forEach((value,key)=>console.log(`${key}: ${value}`));

// -------------------------------------------------------------CONVERT MAPS TO ARRAYS

const arrayFromMap = Array.from(myMap);
console.log(arrayFromMap);

// -------------------------------------------------------------CONVERT MAPS TO DICTIONAY OR OBJECTS

const objectoFromMap = Object.fromEntries(myMap);
console.log(objectoFromMap);

// -------------------------------------------------------------OBJECTS TO MAP

const mapFromObject = new Map (Object.entries(objectoFromMap));
console.log(mapFromObject);

