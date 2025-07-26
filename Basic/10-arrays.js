// We have three arrays

// Declaration

let myArray = [];  // Recomended
let mySecondArray = new Array(3); //It means an array with 3 spaces reserved

myArray = [1]; //It means an array with a elemente 1 inside.

// Because JS is a dinamic language we can mix types of variables in the same
// array.

let myThirdArray = [1,2,"Jose", true];

myArray[4] = "Tarantino"; // Other way to add elements to our arrray

// Most common methos in arrays

// push

// This methog add an element at the end of our array-

myArray.push("Jeral");

// pop

// This method delete the last element of our array and if you want this method
// returns that last element in order to you want see that elemente console.log it
// or if you want saved it.

console.log(myArray.pop());
console.log(myArray.pop());

// shift

// That word delete the first element of our array and returns it as the same way
// that pop method do

console.log(myArray.shift());

//UnShift

// This method add one or more elements to the start of the our array
myArray.unshift("Zambrano", 85)

// Length
console.log(myArray.length);

// Clear
// If you want your array emphy, just initialize your array emphty.

myArray=[];

// Slice
// This method cut a bit of our array in a range given.

let mySliceArray = myArray.slice(2, 8);

// Splice
// Is too similar to slice but this method delete the elements inside the range
// but if you add other number or element this element will be add just after
// the elements deleted

myArray.Splice(1,2,"new entry")


