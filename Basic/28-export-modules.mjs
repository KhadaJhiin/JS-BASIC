// MODULE


// If we want to work with modules there are two forms to achieve this
// first solution is, exchange the name of the file with extension
// .mjs

// The second solution is, add an file at the project with the name
// package.json and inside it, just put the next code.

// {
//     "type":"module"
// } 


// -----------------------------------------------------EXPORT MODULES

export function expAdd(a, b) {
    console.log(`${a + b}`);
}

export class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// -----------------------------------------------------EXPORT PROPERTIES
export const PI = 3.1516;
export let name = "Joselo";

// -----------------------------------------------------DEFAULT EXPORT

export default function defaultSubstract(a, b) {
    console.log(a - b);
}
