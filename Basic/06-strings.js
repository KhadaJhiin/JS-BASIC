// Concatenetion

let name = "jose";
let greeting = "Hi there, " + name + " !";

console.log(greeting);

//Length
console.log(greeting.length)

//Some functions
console.log(greeting.toLocaleUpperCase());
console.log(greeting.indexOf("jose")); //It's function, give us the index where the word put are
console.log(greeting.includes("Hi"));

// Template literals
let message = `With this type of invert quotes
we can skip the line without any problem.
`

// Variable interpolation

console.log(`Hello, ${name}`)
