// set

// Declaration

let mySet = new Set();

// Inicialitation

mySet = new Set(["Jose", "Miguel", 30]);

// Common methods

// add and delete

// With add you can add elements at the end of the set

mySet.add(true);

// With delete you have to indicate wich element exactly you want to delete
// this method returns a boolean in case that the element has been deleted or
// false in the other situation.

mySet.delete("Jose");

// has
// Thi method shows us if an element exist or not

console.log(mySet.has("Miguel"));

// size

console.log(mySet.size)

// convert a set to an array

let myArray = Array.from(mySet);

// convert an array to a set

mySet = new Set(myArray);

// The main characteristic from the sets is that the set doesn't allow 
// duplicated elements.
