// Map or dictionary

// Maps are collections of elements they are formed for a pair of elements it
// will be a key and a value

// Declaration

let myMap = new Map();

console.log(myMap);

// Inicialization

myMap = new Map([
    ["name","Jose"],
    ["E-mail","joselo@gmail.com"],
    ["Edad",30],
]);

// set
// This method allow us add a new key value element to map, is too important
// to remember that the key value cannot be repeted. You just can repeat the
// value if you want but not the key value.

myMap.set("alias","Chepelin");

// Get
// This method is used so as to get as its name says, the value

console.log(myMap.get("name"));

// Delete
// To the same way how we did with get, we can delete a value finding 
// that value with the key value.

myMap.delete("Edad");

// Clear
// We can clear all elements to the map, just using the keyword clear

myMap.clear();

// KEYS
// This method just returns us a list with all keys from the array

console.log(myMap.keys());

// VALUES
// This method has the same function of keys, but it returns all the values.

console.log(myMap.values());

// SIZE
// This method shows the lenght from the array

console.log(myMap.size);

// ENTRIES
// This is a way to iterating all the elements of our map

console.log(myMap.entries());