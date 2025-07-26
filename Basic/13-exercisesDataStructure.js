// 1 Create an array that stores five animals

let animals = ["Bird","dog","rooster","cat","horse"];
console.log(animals);

// 2 Add two animals more, one at the beggining and other at the end of the list

animals.push("cow");
animals.unshift("pig");

console.log(animals);

// 3 Delete the element in the fourth position.

animals.splice(3,1);
console.log(animals);

// 4 Create a set that stores five books

let books = new Set(["The lord of the flyes","Essay on blindness","Factotum","The lord of the rings","Atomic habbits"]);
console.log(books);

// 5 Add two more, one of which have to be repeat.

books.add("Make time","Essay on blindness");
console.log(books);

// 6 Delete a specific one of your choice

books.delete("The lord of the rings");
console.log(books);

// 7 Create a map that relates the number of the month with its name

let months = new Map([
    [1,"Juanary"],
    [2,"February"],
    [3,"March"],
    [4,"April"],
    [5,"May"],
    [6,"June"],
    [7,"July"],
    [8,"August"],
    [9,"September"],
    [10,"Octuber"],
    [11,"November"],
    [12,"December"]]);

// 8 Check if the month number five exist and print its value

console.log(months.get(5));

// 9 Add a key to your map with an associated array that stores the summer months

months.set("summer",["June","July","August"]);
console.log(months.entries());

// 10 Create an array, transform it into a set, and store it in a map.

let clothes = ["Skirt","Trousers","Jacket"];
clothes = new Set(clothes);
let personalThings = new Map([["Clothes",clothes]]);

console.log(personalThings.entries());

